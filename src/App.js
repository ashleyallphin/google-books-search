import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Jumbotron from './components/jumbotron/Jumbotron.js';
import Books from './components/books/Books.js';
import Wrapper from './components/wrapper/Wrapper';
import Footer from './components/footer/Footer.js';

console.log(process.env.REACT_APP_GOOGLEBOOKS_API_KEY);


class App extends Component {

  render() {

    return (

      <div className="App">
          
          <Navbar />

          <Jumbotron />

          <Books />

          <Wrapper />

          <Footer />

      </div>
    )
}
}

export default App;
