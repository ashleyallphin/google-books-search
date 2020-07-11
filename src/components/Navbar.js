import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, withRouter } from 'react-router-dom';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from '../assets/images/GoogleG_logo.png';


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
            <NavLink
                className="link"
                activeClassName="active-link"
                to="/search">
                Search
            </NavLink>
            <NavLink
                className="link"
                activeClassName="active-link"
                to="/bookshelf">
                Your Bookshelf
            </NavLink>
        </NavbarBrand>
    </Navbar>
    )
}

export default withRouter(Nav);
