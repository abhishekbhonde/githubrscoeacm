import React from 'react';
import { Link } from 'react-router-dom';
// import '../index.css';
import './Nav.css';
const Nav = () => {
    return (
        <nav>
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
