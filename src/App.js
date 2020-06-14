import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Jumbotron from './components/jumbotron/Jumbotron.js';
import Books from './components/books/Books.js';
import Footer from './components/footer/Footer.js';

// console.log(process.env.REACT_APP_GOOGLEBOOKS_API_KEY);


class App extends Component {

  render() {

    return (

      <div className="App">
          {/* navbar component */}
          <Navbar />
          {/* jumbotron component (Google Books logo) */}
          <Jumbotron />
          {/* books component houses searchArea and wrapper*/}
          <Books />

          <Footer />

      </div>
    )
}
}

export default App;
