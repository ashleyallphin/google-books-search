import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import logo from '../assets/images/GoogleBooks_logo.svg'


const Header = props => {
    return(
        <Jumbotron fluid>
            
            <Container className="GoogleBooksLogo">
            <img
                alt="Google Books Logo"
                src={logo}
            />{' '}
            </Container>

        </Jumbotron>
    )
}

export default Header;
