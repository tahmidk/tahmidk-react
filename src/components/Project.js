import React from "react";
import "../styles/styles_project.css";

/**
 *  Func:   Project
 *  Desc:   Renders a single project as its own formatted component
 *  Args:   The elements making up a Project component consist of...
 *      name:   string project title
 *      time:   string representing the project duration
 *      tags:   a list of string tags/identifiers
 *      desc:   string description of the project
 *      img:    a path to
 */
function Project(props) {
	// Extract data
	const name = props.proj.name;
	const time = props.proj.time;
	const tags = props.proj.tags;
	const desc = props.proj.desc;
	const img = props.proj.img;

	return (
		<div className="project">
			<div className="project_img_div">
				<img
					className="project_img"
					src={require(`../images/${props.proj.img.toLowerCase()}`)}
				/>
			</div>
			<div className="project_details_div">
				<div className="project_title">
					<h2> {name} </h2>
				</div>
			</div>
		</div>
	);
}

export default Project;
