import './Header.css'
import Nav from './Nav.js';
import React from 'react';
import logo from './img/logo.png';

function Header() {
    return (
        <header className="Header">
            <img className="logo" alt="logo" src={logo}></img>
            <Nav></Nav>
        </header>
    );
}
export default Header;