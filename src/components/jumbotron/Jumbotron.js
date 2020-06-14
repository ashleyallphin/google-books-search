import React from 'react';
import "./Jumbotron.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import logo from '../../images/GoogleBooks_logo.svg'


//jumbotron prop
const jumbotron = props => {
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

export default jumbotron;
