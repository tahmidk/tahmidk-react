import React from "react";

import Project from "./Project";
import project_data from "../misc/project_data";

function ProjectSection() {
	// Render each project component based on project_data
	const project_components = project_data.map(p => (
		<Project key={p.id} proj={p} />
	));

	return <div className="project_section">{project_components}</div>;
}

export default ProjectSection;
