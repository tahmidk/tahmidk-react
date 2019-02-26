import React from "react";
import "../styles/styles_nav.css";

function NavButton(props) {
	const name = props.name;
	const imgurl = props.img;
	const link = props.href;

	console.log(imgurl);

	return (
		<div className="nav_button">
			<img
				src={props.img}
				alt=""
				className="nav_button_ico"
				draggable="false"
			/>
			<span className="nav_button_name"> {name} </span>
		</div>
	);
}

export default NavButton;
