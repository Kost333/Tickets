import React from 'react';
import Modal from 'react-modal';

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

const ModalWrapper = ({isOpen, onClose, children}) => {
    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
            onRequestClose={onClose}
        >
            {children}
        </Modal>
    );
};

export default ModalWrapper;