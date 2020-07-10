import React from 'react';
import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from '../../images/GoogleG_logo.png'

//header prop
const Nav = props => {
    return(
    <Navbar
        className="Navbar"
        bg="dark"
        variant="dark">
        <NavbarBrand href="#home">
            <img
                alt="Boosh Monkey Head"
                src={logo}
            />{' '}
            Google Books Search
        </NavbarBrand>
    </Navbar>
    )
}

export default Nav;
