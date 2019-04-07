import React, { Component } from "react";
import "./styles/styles_main.css";

// Import components
import Header from "./components/Header";
import MainContent from "./components/MainContent";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContent />
			</div>
		);
	}
}

export default App;
