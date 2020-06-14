import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './BookCard.css';


const BookCard = (props) => {

  return (
    <div className="container text-center">

    <Card className="card">
      <div className="card-flex">
      
      <Card.Img
        className="card-image"
        src={props.image}
        alt="" />
        <Card.Body className="card-body">
                <h3>{props.category}</h3>
                <a href={props.link}>
                  <h1 className="book-title">{props.title}</h1>
                </a>
                <div className="description">
                  <h2>{props.snippet}</h2>
                </div>
              <Button className="save-book-button" variant="primary">Save Book</Button>
        </Card.Body>
        
        </div>
    </Card>

    </div>

  )

}

export default BookCard;
