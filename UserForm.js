import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ closeForm, user }) => {
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [phone, setPhone] = useState(user ? user.phone : '');
    const [address, setAddress] = useState(user ? user.address.street : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user) {
                // Update existing user
                await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, { name, email, phone, address });
            } else {
                // Create new user
                await axios.post('https://jsonplaceholder.typicode.com/users', { name, email, phone, address });
            }
            closeForm();
        } catch (err) {
            console.error('Failed to save user', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
            <button type="submit">{user ? 'Update' : 'Create'} User</button>
            <button type="button" onClick={closeForm}>Cancel</button>
        </form>
    );
};

export default UserForm;