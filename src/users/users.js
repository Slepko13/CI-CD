import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Users = () => {

    const [users, setUsers] = useState([]);



    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data);
        };
        loadUsers();
    }, [])

    return (
        <div data-testid='users-page'>
            {users.map(({ id, name }) =>
                <Link
                    to={`/users/${id}`}
                    key={id}
                    data-testid="user-item"
                >{name}
                </Link>)}
        </div>

    );
}

export default Users;