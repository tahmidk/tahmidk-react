import React from "react";
import Section from "./Section";
import "../styles/styles_contact.css";

function ContactSection() {
	return (
		<div className="section_div">
			<Section key="contact" title="Contact" />
			<div className="master_div">
				<div className="contact_div">
					<div className="contact_subdiv">
						<div className="contact_icon">
							<img className="icon" src={require("../images/phone.png")} />
						</div>
						<div className="contact_info">
							<span> +1 (949) 468 7302 </span>
						</div>
					</div>
					<div className="contact_subdiv">
						<div className="contact_icon">
							<img className="icon" src={require("../images/email.png")} />
						</div>
						<div className="contact_info">
							<span> tahmidkhan3141@gmail.com</span>
						</div>
					</div>
				</div>
				<div className="links_div">
					<div className="links">
						<img className="link_icon" src={require("../images/github.png")} />
						<img
							className="link_icon"
							src={require("../images/linkedin.png")}
						/>
						<img className="link_icon" src={require("../images/resume.png")} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
