import React from "react";
import "../styles/styles_nav.css";
import NavControls from "./NavControls";

function NavContent() {
	return (
		<div className="nav_content">
			<NavControls />
			<div className="bg_city">
				<img
					src={require("../images/city.jpg")}
					className="city"
					draggable="false"
					alt=""
				/>
			</div>
		</div>
	);
}

export default NavContent;
