import React from "react";
import "../styles/styles_home.css";

function Home() {
	const greeting = "Good Afternoon!";

	return (
		<div className="greeting_div">
			<div className="greeting_title_div">
				<span className="greeting_title"> {greeting} </span>
			</div>
			<div className="greeting_message_div">
				<p className="greeting_message">
					My name is <span className="hl"> Tahmid Khan </span>. I am a recently
					graduated student of the{" "}
					<strong> University of California San Diego </strong> with a major in{" "}
					<span className="hl"> Computer Science </span> and minor in{" "}
					<span className="hl"> Mathematics </span>.
				</p>
			</div>
		</div>
	);
}

export default Home;
