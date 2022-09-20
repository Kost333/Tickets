import React from 'react';
import {Table} from "react-bootstrap";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const UpdateModal = ({isOpen, onClose, name, description}) => {

    return (
        <ModalWrapper
            isOpen={isOpen}
            onClose={onClose}
        >
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{description}</td>
                </tr>
                </tbody>
            </Table>
        </ModalWrapper>
    );
};

export default UpdateModal;