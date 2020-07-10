import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';


function App() {
	return (
		<div className="App">

			<Navbar />
			<Header />
			<Router>
				<Switch>
					{/* <Route exact path="/saved" component={Saved} /> */}
					<Route component={Results} />
				</Switch>
			</Router>
			<Footer />

		</div>
	);
}

export default App;
