import React from "react";
import Section from "./Section";
import "../styles/styles_objective.css";

function ObjectiveSection() {
	return (
		<div className="section_div">
			<Section key="objective" title="My Objective" />
			<div className="objective_div">
				<p className="objective_text">
					I am a highly motivated self-starter driven by the satisfaction of
					seeing the software I make produce tangible change. I am a team-player
					currently seeking a position as an entry-level Software Engineer
					working on a project that can change the lives of thousands of users.
					<br />I do not want to merely watch the future unfold, I want to be
					among those unfolding it.
				</p>
			</div>
		</div>
	);
}

export default ObjectiveSection;
