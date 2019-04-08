import React from "react";
import Section from "./Section";
import resume from "../resume.pdf";
import "../styles/styles_contact.css";

class ContactSection extends React.Component {
	constructor() {
		super();
		this.state = {
			github_style: { filter: "brightness(1)" },
			linkedin_style: { filter: "brightness(1)" },
			resume_style: { filter: "brightness(1)" }
		};

		this.handle_mouse_enter = this.handle_mouse_enter.bind(this);
		this.handle_mouse_leave = this.handle_mouse_leave.bind(this);
	}

	handle_mouse_enter(event) {
		const target = event.id + "_style";
		this.setState({
			[target]: { filter: "brightness(2.5)" }
		});
	}

	handle_mouse_leave(event) {
		const target = event.id + "_style";
		this.setState({
			[target]: { filter: "brightness(1)" }
		});
	}

	render() {
		return (
			<div className="section_div">
				<Section key="contact" title="Contact" />
				<div className="master_div">
					<div className="contact_div">
						<div className="contact_subdiv">
							<div className="contact_icon">
								<img
									draggable="false"
									className="icon"
									src={require("../images/phone.png")}
									alt="phone_ico"
								/>
							</div>
							<div className="contact_info">
								<span> +1 (949) 468 7302 </span>
							</div>
						</div>
						<div className="contact_subdiv">
							<div className="contact_icon">
								<img
									draggable="false"
									className="icon"
									src={require("../images/email.png")}
									alt="email_ico"
								/>
							</div>
							<div className="contact_info">
								<span> tahmidkhan3141@gmail.com</span>
							</div>
						</div>
					</div>
					<div className="links_div">
						<div className="links">
							<a href="https://github.com/tahmidk" title="Github">
								<img
									className="link_icon"
									id="github"
									src={require("../images/github.png")}
									alt="github_ico"
									/*
								style={this.state.github_style}
								onMouseEnter={this.handle_mouse_enter}
								onMouseLeave={this.handle_mouse_leave}
								*/
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/tahmidhkhan/"
								title="LinkedIn"
							>
								<img
									className="link_icon"
									id="linkedin"
									src={require("../images/linkedin.png")}
									alt="linkedin_ico"
									/*
								style={this.state.linkedin_style}
								onMouseEnter={this.handle_mouse_enter}
								onMouseLeave={this.handle_mouse_leave}
								*/
								/>
							</a>
							<a href={resume} title="Resume (PDF)">
								<img
									className="link_icon"
									id="resume"
									src={require("../images/resume.png")}
									alt="resume_ico"
									/*
								style={this.state.resume_style}
								onMouseEnter={this.handle_mouse_enter}
								onMouseLeave={this.handle_mouse_leave}
								*/
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactSection;
