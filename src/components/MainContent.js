import React from "react";
import ProjectSection from "./ProjectSection";
import "../styles/styles_main.css";
import Home from "./Home";

function MainContent() {
	return (
		<main className="main_content">
			<Home />
			<ProjectSection />
		</main>
	);
}

export default MainContent;
