import React, {useEffect, useState} from 'react';
import style from './ticket.module.css';
import moment from "moment";
import {Button, Table} from "react-bootstrap";
import UpdateModal from "../updateModal/updateModal";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalAdd from "../ModalAdd/ModalAdd";
import {useDispatch, useSelector} from "react-redux";
import {ticketsOp} from "../../store/tickets/operations";
import {ticketsSel} from "../../store/tickets/selectors";
import DarkMode from "../LightDarkMode/DarkMode";
import {appStylesSel} from "../../store/app/selectors";

const posts = [
    {
        id: 1,
        name: "John1",
        description: "test description1"
    },
    {
        id: 2,
        name: "John2",
        description: "test description2"
    },
    {
        id: 3,
        name: "John3",
        description: 'test description3'
    },
]

const Ticket = () => {
    const dispatch = useDispatch();

    const state = useSelector(ticketsSel.ticketsDataSelector);
    const appStyles = useSelector(appStylesSel.getStyles);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});


    useEffect(() => {
        const existingPosts = localStorage.getItem('posts');

        if (existingPosts && JSON.parse(existingPosts).length !== 0) {
            dispatch(ticketsOp.setupTicketsState(JSON.parse(existingPosts)));
        } else {
            localStorage.setItem('posts', JSON.stringify(posts));
            dispatch(ticketsOp.setupTicketsState(posts))
        }

        /*
         fetch('http://localhost:3000/db')
            .then(response => response.json())
            .then(response => response.posts)
            .then(posts => {
                const mappedPosts = posts.map((post, i) => {
                    return {
                        id: i + 1,
                        ...post
                    }
                })
                setState(mappedPosts)
            })
         */
    }, []);


    const deleteTicket = () => {
        const updatedState = state.filter(ticket => ticket.id !== selectedItem.id);

        updateStates(updatedState)
        setIsOptionsModalOpen(false);
    }

    const openEditModal = () => {
        setIsOptionsModalOpen(false)
        setIsEditModalOpen(true);
    }

    const openAddModal = () => {
        setIsOptionsModalOpen(false)
        setIsAddModalOpen(true);
    }

    const openIsOptionsModal = (item) => {
        setSelectedItem(item);
        setIsOptionsModalOpen(true)
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }

    const closeAddModal = () => {
        setIsAddModalOpen(false)
    }

    const closeOptionsModal = () => {
        setIsOptionsModalOpen(false);
    }

    const updateStates = (tickets = []) => {
        localStorage.setItem('posts', JSON.stringify(tickets));
        dispatch(ticketsOp.setupTicketsState(tickets))
    }

    const handleUpdateTickets = (updatedTicket) => {
        const updatedTickets = state.map((t) => {
            if (t.id === updatedTicket.id) {
                return {
                    ...updatedTicket,
                    isUpdated: true
                }
            }

            return t
        });

        updateStates(updatedTickets);
    }

    const handleAddNewTicket = (name, description) => {
        const updatedState = [
            ...state,
            {
                id: state.at(-1).id + 1,
                name,
                description
            }
        ];

        updateStates(updatedState);
    }

    return (
        <div className={style.page}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <h1>Tickets</h1>
                <DarkMode/>
            </div>

            <UpdateModal
                isOpen={isEditModalOpen}
                selectedPost={selectedItem}
                onUpdate={handleUpdateTickets}
                onClose={closeEditModal}
            />

            <ModalAdd
                onAdd={handleAddNewTicket}
                isOpen={isAddModalOpen}
                onClose={closeAddModal}
            />

            <ModalWrapper
                isOpen={isOptionsModalOpen}
                onClose={closeOptionsModal}
            >
                <div>
                    <Button className={style.buttonUd} onClick={openEditModal} variant="secondary">Update</Button>{' '}
                </div>

                <div>
                    <Button className={style.buttonDel} onClick={deleteTicket} variant="danger">Delete</Button>{' '}
                </div>
            </ModalWrapper>

            <div>
                <Table striped bordered hover variant={appStyles.theme}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>CreatedAt</th>
                        <th>Option</th>
                        <th>Edited</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        state.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <th>{moment().format("DD-MM-YYYY")}</th>
                                <th>
                                    <Button onClick={() => openIsOptionsModal(item)} variant="secondary">Option</Button>
                                </th>
                                <th><small>{item.isUpdated && '(edited)'}</small></th>
                            </tr>
                        ))
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button variant="success" onClick={openAddModal}>Add Ticket</Button>{' '}</td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Ticket;