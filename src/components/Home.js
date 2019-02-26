import React from "react";
import "../styles/styles_main.css";

function Home() {
	const greeting = "Good Afternoon!";

	return (
		<div className="sec_home">
			<div className="greeting_title_div">
				<span className="greeting_title"> {greeting} </span>
			</div>
			<div className="greeting_message_div">
				<p className="greeting_message">
					My name is Tahmid Khan. I am a recently graduated student of the
					University of California San Diego.
				</p>
			</div>
		</div>
	);
}

export default Home;
