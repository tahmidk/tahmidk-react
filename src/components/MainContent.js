import React from "react";

import ObjectiveSection from "./ObjectiveSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";

import "../styles/styles_main.css";
import Home from "./Home";

function MainContent() {
	return (
		<main className="main_content">
			<Home />
			<ObjectiveSection />
			<ProjectSection />
			<ContactSection />
		</main>
	);
}

export default MainContent;
