import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import {useSelector} from "react-redux";
import {appStylesSel} from "../../store/app/selectors";

const UpdateModal = ({isOpen, onClose, selectedPost, onUpdate}) => {
    const [post, setPost] = useState({})

    const appStyles = useSelector(appStylesSel.getStyles);

    const onSave = () => {
        if (post) {
            onUpdate(post)
            onClose()
        }
    }

    const onChangeName = (name) => {
        setPost({...post, name})
    }

    const onChangeDescription = (description) => {
        setPost({...post, description})
    }

    useEffect(() => {
        setPost(selectedPost)
    }, [selectedPost])

    return (
        <ModalWrapper
            isOpen={isOpen}
            onClose={onClose}
        >
            <Table striped bordered hover variant={appStyles.theme}>
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