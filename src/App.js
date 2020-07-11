import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Nav from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import Saved from './components/Saved';


function App() {
	return (
		<div className="App">


				<Router>
				<Nav />
				<Header />
					<Switch>
						<Route exact path="/search" component={Results} />
						<Route exact path="/bookshelf" component={Saved} />
						<Redirect to="/search" />
					</Switch>
				<Footer />
				</Router>


		</div>
	);
}

export default App;
