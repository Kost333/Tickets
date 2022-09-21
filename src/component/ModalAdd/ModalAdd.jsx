import React, {useState} from 'react';
import {Button, Table} from "react-bootstrap";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalAdd = ({isOpen, onClose, updateLocalStorage}) => {
    const [post, setPost] = useState({})

    const onAdd = () => {
        if (post.name && post.description) {
            const existingPosts = JSON.parse(localStorage.getItem('posts'))

            existingPosts.push({id: existingPosts.at(-1).id + 1, ...post})

            localStorage.setItem('posts', JSON.stringify(existingPosts));
            updateLocalStorage()
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
                    <td><Button variant="secondary" onClick={onAdd}>Add</Button>{' '}</td>
                </tr>
                </tbody>
            </Table>
        </ModalWrapper>
    );
};

export default ModalAdd;