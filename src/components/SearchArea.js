import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchArea = (props) => {

    return (
        <Container className="search-area text-center">
                
            <Form
                // run searchBooks method on submit button type
                onSubmit={props.searchBooks} action="" className="form">
                
                <Form.Group
                    className="input-field"
                    controlId="">    
                        <Form.Control
                        onChange={props.handleSearch}
                        type="text"
                        placeholder="Search Google Books"/>
                </Form.Group>
                
                <Button
                    className="search-button"
                    variant="primary"
                    type="submit">
                    Search
                </Button>

            </Form>

        </Container>
    )

}

export default SearchArea;