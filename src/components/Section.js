import React from "react";
import "../styles/styles_section.css";

function Section(props) {
	return (
		<div className="section_head" id={props.key}>
			<div className="section_head_inner">
				<span className="section_title" id={props.key}>
					{props.title}
				</span>
			</div>
		</div>
	);
}

export default Section;
