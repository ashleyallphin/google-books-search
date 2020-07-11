import React, { Component } from 'react';
import SearchArea from './SearchArea.js';
import request from 'superagent';
import Wrapper from './Wrapper.js';

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
            //spread operator ...
            this.setState({ books: [...data.body.items]})
        })
    }

    saveBook = (e) => {
        e.preventDefault();
        console.log("saving")
    }
    

    // search method (param 'e' = event)
    handleSearch = (e) => {
        // set state when user uses input field
        // value = input field text
        this.setState({ searchField: e.target.value })
    }

    saveBook = () => {
    console.log("saving")
    }

    render() {

        return(
            <div className="books">
            <SearchArea
                searchBooks={this.searchBooks}
                handleSearch={this.handleSearch} />
            <Wrapper
                books={this.state.books}
                saveBook={this.saveBook} />
            </div>
        );
        
    }
}

export default Books;
