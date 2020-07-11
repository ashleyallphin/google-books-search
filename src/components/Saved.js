import React, { Component } from 'react';
import request from 'superagent';
import SavedWrapper from './SavedWrapper.js';
import Alert from 'react-bootstrap/Alert'

class Saved extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //empty array for returned books
        books: [],
          //state is updated with user input box entry
        searchField: ''
        }
    }

    render() {

        return(
            <div className="books">

            {/* <SearchArea searchBooks={this.searchBooks} handleSearch={this.handleSearch} /> */}
            <SavedWrapper books={this.state.books} saveBook={this.saveBook} />
            </div>
        );
        
    }
}

export default Saved;
