import React from "react";

import Project from "./Project";
import Section from "./Section";
import project_data from "../misc/project_data";
import "../styles/styles_main.css";

function ProjectSection() {
	// Render each project component based on project_data
	const project_components = project_data.map(p => (
		<Project key={p.id} proj={p} />
	));

	return (
		<div className="section_div">
			<Section key="projects" title="Projects" />
			{project_components}
		</div>
	);
}

export default ProjectSection;
