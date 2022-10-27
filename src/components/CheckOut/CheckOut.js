import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h1>This is checkout {user.name}</h1>
        </div>
    );
};

export default CheckOut;