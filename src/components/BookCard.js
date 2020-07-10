import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookCard = (props) => {

return (
    <div className="container text-center">

    <Card className="card">
    <div className="card-flex">
    
    <div
        className="card-image"
    >
    < img
        src={props.image}
        alt="" />
    </div>

        <div className="card-body">
                <h4>{props.category}</h4>
                <a rel="noopener noreferrer"
                href={props.link} target="_blank">
                <h1 className="book-title">{props.title}</h1>
                </a>
                <h2>by {props.author}</h2>
                <div className="description">
                <h3>{props.description}</h3>
                </div>
            <Button
                onClick={props.saveBook}
                className="save-book-button"
                variant="primary">
                Save Book
            </Button>
        </div>
        </div>
    </Card>

    </div>

)

}

export default BookCard;
