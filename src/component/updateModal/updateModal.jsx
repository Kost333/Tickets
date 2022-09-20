import React, {useState} from 'react';
import Modal from "react-modal";
import {Table} from "react-bootstrap";
import state from "./../tickets/ticket";
import setSelectedItem from "../tickets/ticket";

const UpdateModal = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

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

    const openUpdateModal = (item) => {
        setSelectedItem(item)
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectedItem({});
    }

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={closeModal}>

                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        state.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Modal>

        </div>
    );
};

export default UpdateModal;