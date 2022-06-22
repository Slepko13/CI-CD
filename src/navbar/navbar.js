import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <Link to="/" data-testid="main-link">Main</Link>
            <br />
            <Link to="/about" data-testid="about-link">About</Link>
            <br />
            <Link to="/users" data-testid="users-link">Users</Link>
            <br />
        </>
    );
}

export default Navbar;
