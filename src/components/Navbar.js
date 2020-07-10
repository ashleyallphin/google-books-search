import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from '../assets/images/GoogleG_logo.png'

//header prop
const Nav = props => {
    return(
    <Navbar
        className="Navbar"
        bg="dark"
        variant="dark">
        <NavbarBrand className="navbar-brand">
            <img
                alt="Google G"
                src={logo}
            />{' '}
            <a  href="/">
                <div className="link">Saved Articles</div>
            </a>
        </NavbarBrand>
    </Navbar>
    )
}

export default Nav;
