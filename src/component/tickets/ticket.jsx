import React, {useEffect, useState} from 'react';
import style from './ticket.module.css';
import moment from "moment";
import {Button, Table} from "react-bootstrap";
import Modal from 'react-modal';
import openUpdateModal from "../updateModal/updateModal";

const Ticket = () => {

    const [state, setState] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'row',
            flexFlow: 'row nowrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'nowrap',
        },
    };

    useEffect(() => {
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
    }, []);

    const deleteTicket = (id) => {
        setState(state.filter(ticket => ticket.id !== id))
        closeModal()
    }

    const editTicket = (id) => {
        openUpdateModal()
    }

    const openModal = (item) => {
        setSelectedItem(item)
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectedItem({});
    }


    return (
        <div className={style.page}>
            <div>
                <h1>Tickets</h1>
            </div>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={closeModal}>

                <div>
                    <Button onClick={() => editTicket(selectedItem.id)} variant="secondary">Update</Button>{' '}
                </div>

                <div>
                    <Button onClick={() => deleteTicket(selectedItem.id)} variant="danger">Delete</Button>{' '}
                </div>
            </Modal>

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
                                <th><Button onClick={() => openModal(item)} variant="secondary">Option</Button>{' '}
                                </th>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Ticket;