import React, {useState} from 'react';
import {Button, Table} from "react-bootstrap";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalAdd = ({isOpen, onClose, onAdd}) => {

    const [post, setPost] = useState({})

    const handleOnAdd = () => {
        if (post.name && post.description) {
            onAdd(post.name, post.description)
            setPost({})
            onClose()
        } else {
            alert("Invalid Values")
        }
    }

    const onChangeName = (name) => {
        setPost({...post, name})
    }

    const onChangeDescription = (description) => {
        setPost({...post, description})
    }

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
                    <th>Option</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input type="text" value={post.name || ''}
                               onChange={(e) => onChangeName(e.target.value)}/></td>
                    <td><input type="text" value={post.description || ''}
                               onChange={(e) => onChangeDescription(e.target.value)}/></td>
                    <td><Button variant="secondary" onClick={handleOnAdd}>Add</Button>{' '}</td>
                </tr>
                </tbody>
            </Table>
        </ModalWrapper>
    );
};

export default ModalAdd;