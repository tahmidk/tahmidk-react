import React from "react";
import "../styles/styles_nav.css";
import NavButton from "./NavButton";

// Import button icons
import home from "../images/home.png";
import link from "../images/link.png";

function NavControls() {
	return (
		<div className="nav_controls">
			<span className="nav_title"> Tahmid Khan </span>
			<div className="nav_table" style={{ marginTop: "7em" }}>
				<table align="center">
					<tr>
						<td>
							<NavButton name="home" href="#" img={home} />
						</td>
						<td>
							<NavButton name="links" href="#" img={link} />
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default NavControls;
