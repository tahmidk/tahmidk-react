import React from "react";
import "../styles/styles_project.css";

/**
 *  Class:  Project
 *  Desc:   Renders a single project as its own formatted component
 *  Args:   The elements making up a Project component consist of...
 *      name:   string project title
 *      time:   string representing the project duration
 *      tags:   a list of string tags/identifiers
 *      desc:   string description of the project
 *      img:    a path to
 */
class Project extends React.Component {
	constructor() {
		super();
		this.state = {
			img_style: {
				mixBlendMode: "soft-light",
				WebkitFilter: "blur(0.25em) saturate(0.1)",
				filter: "blur(0.25em) saturate(0.1)"
			}
		};

		this.handle_mouse_enter = this.handle_mouse_enter.bind(this);
		this.handle_mouse_leave = this.handle_mouse_leave.bind(this);
	}

	handle_mouse_enter(event) {
		this.setState({
			img_style: {
				mixBlendMode: "normal",
				WebkitFilter: "none",
				filter: "none"
			}
		});
	}

	handle_mouse_leave(event) {
		this.setState({
			img_style: {
				mixBlendMode: "soft-light",
				WebkitFilter: "blur(0.25em) saturate(0.1)",
				filter: "blur(0.25em) saturate(0.1)"
			}
		});
	}

	render() {
		// Extract data
		const name = this.props.proj.name;
		const time = this.props.proj.time;
		const tags = this.props.proj.tags;
		const desc = this.props.proj.desc;
		const img = this.props.proj.img;

		var color;
		switch (tags) {
			case "C++":
				color = "indianred";
				break;
			case "C#":
				color = "purple";
				break;
			case "Java":
				color = "orangered";
				break;
			case "Python":
				color = "green";
				break;
			case "Verilog":
				color = "darkslategrey";
				break;
			default:
				color = "black";
				break;
		}

		return (
			<div
				className="project"
				onMouseEnter={this.handle_mouse_enter}
				onMouseLeave={this.handle_mouse_leave}
			>
				<div className="tags_ribbon" style={{ background: color }}>
					{" "}
					{tags}{" "}
				</div>
				<div className="project_img_div" style={this.state.img_style}>
					<img
						draggable="false"
						className="project_img"
						src={require(`../images/${img.toLowerCase()}`)}
					/>
				</div>
				<div className="project_details_div">
					<div className="project_title_div">
						<span className="project_title"> {name} </span>
					</div>
					<div className="project_date_div">
						<span className="project_date">{time}</span>
					</div>
					<div className="project_description_div">{desc}</div>
				</div>
			</div>
		);
	}
}

export default Project;
