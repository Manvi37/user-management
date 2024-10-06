import React from 'react';
import { Modal, Button } from '@mui/material';

const ConfirmationModal = ({ open, onClose, onConfirm }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div style={modalStyle}>
                <h2>Are you sure?</h2>
                <p>Do you really want to delete this user?</p>
                <Button variant="contained" color="primary" onClick={onConfirm}>
                    Yes, Delete
                </Button>
                <Button variant="outlined" color="secondary" onClick={onClose}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

export default ConfirmationModal;
