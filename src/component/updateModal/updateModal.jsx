import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const UpdateModal = ({isOpen, onClose, selectedPost, updateLocalStorage}) => {

    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(selectedPost)
    }, [selectedPost])

    const onSave = () => {
        if (post) {
            const existingPosts = JSON.parse(localStorage.getItem('posts'))
            post.isUpdated = true
            const updatedPost = existingPosts?.map(item => {
                if (item.id === post.id) return post
                return item
            })
            localStorage.setItem('posts', JSON.stringify(updatedPost));
            updateLocalStorage()
            onClose()
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
                    <td><input type="text" value={post.name} onChange={(e) => onChangeName(e.target.value)}/></td>
                    <td><input type="text" value={post.description}
                               onChange={(e) => onChangeDescription(e.target.value)}/></td>
                    <td><Button variant="secondary" onClick={() => onSave()}>Save</Button>{' '}</td>
                </tr>
                </tbody>
            </Table>
        </ModalWrapper>
    );
};

export default UpdateModal;