import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserForm from '.UserForm';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(response.data);
            setLoading(false);
        };
        
        fetchUser();
    }, [id]);

    return (
        loading ? 
        <p>Loading...</p> :
        (
            <>
                {user && (
                    <>
                        <h1>{user.name}</h1>
                        <p>Email: {user.email}</p>
                        {/* Other details... */}
                        {/* Include logic to edit using UserForm */}
                        {/* Pass down the user object to pre-fill the form */}
                        {/* Optionally include delete functionality here */}
                    </>
                )}
            </>
        )
    );
};

export default UserDetail;