import React, { Component } from 'react';
import "./Books.css";
import SearchArea from '../searcharea/SearchArea.js';
import request from 'superagent';


class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //empty array for returned books
        books: [],
          //state is updated with user input box entry
        searchField: ''
        }
    }

    searchBooks = (e) => {
        // prevent from reloading page
        e.preventDefault();
        
        request.get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchField })
        .then((data) => {
            console.log(data);
        })
    }
    

    // search method (param 'e' = event)
    handleSearch = (e) => {

        console.log(e.target.value);

        // set state when user uses input field
        // value = input field text
        this.setState({ searchField: e.target.value })
    }

    render() {

        return(
            <SearchArea searchBooks={this.searchBooks} handleSearch={this.handleSearch} />
        );
        
    }
}

export default Books;
