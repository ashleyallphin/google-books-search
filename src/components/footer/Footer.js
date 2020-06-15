import React from 'react';
import "./Footer.css";
import logo from '../../images/github-logo.svg';




//footer prop
const Footer = props => {
    return(
    <div
    className="footer">
        <a
        className="footer-image"
        href="https://github.com/ashleyallphin/google-books-search"
        target="_blank"
        rel="noopener noreferrer"
        cursor="pointer"
        >
            <img
            alt="Github Logo"
            src={logo}
            />
        </a>

    </div>
    )
}

export default Footer;
