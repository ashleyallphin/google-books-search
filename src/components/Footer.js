import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    
        return (
            <div
            className="footer">
                <a
                href="https://github.com/ashleyallphin/google-books-search"
                target="_blank"
                rel="noopener noreferrer"
                cursor="pointer"
                >
                <FontAwesomeIcon className="footer-image" icon={faGithub} />
                </a>
        
            </div>
                    );
    
}

export default Footer;