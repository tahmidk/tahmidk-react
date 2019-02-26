import React, { Component } from "react";
import "./styles/styles_main.css";

// Import components
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import NavContent from "./components/NavContent";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContent />
				<NavContent />
			</div>
		);
	}
}

export default App;
