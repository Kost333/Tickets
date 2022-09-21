import React, {useEffect, useState} from 'react';
import style from './ticket.module.css';
import moment from "moment";
import {Button, Table} from "react-bootstrap";
import UpdateModal from "../updateModal/updateModal";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalAdd from "../ModalAdd/ModalAdd";

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

    const [state, setState] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});


    useEffect(() => {
        const existingPosts = localStorage.getItem('posts');

        if (existingPosts && JSON.parse(existingPosts).length !== 0) {
            setState(JSON.parse(existingPosts))
        } else {
            localStorage.setItem('posts', JSON.stringify(posts));
            setState(posts)
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
        setState((prevState) => {
            const updatedState = prevState.filter(ticket => ticket.id !== selectedItem.id);
            localStorage.setItem('posts', JSON.stringify(updatedState));

            return updatedState;
        });

        setIsOptionsModalOpen(false);
    }

    const openEditModal = () => {
        setIsOptionsModalOpen(false)
        setIsEditModalOpen(true);
    }

    const openIsOptionsModal = (item) => {
        setSelectedItem(item);
        setIsOptionsModalOpen(true)
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }

    const closeOptionsModal = () => {
        setIsOptionsModalOpen(false);
    }

    const updateLocalStorage = () => {
        const existingPosts = localStorage.getItem('posts');
        setState(JSON.parse(existingPosts))
    }

    return (
        <div className={style.page}>
            <div>
                <h1>Tickets</h1>
            </div>

            <UpdateModal
                updateLocalStorage={updateLocalStorage}
                isOpen={isEditModalOpen}
                selectedPost={selectedItem}
                onClose={closeEditModal}
            />

            <ModalAdd
                updateLocalStorage={updateLocalStorage}
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
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
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>CreatedAt</th>
                        <th>Option</th>
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
                            </tr>
                        ))
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button variant="success" onClick={openEditModal}>Add Ticket</Button>{' '}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Ticket;