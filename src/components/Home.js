import React from "react";
import "../styles/styles_home.css";

class Home extends React.Component {
	state = {
		hour: null
	};

	componentDidMount() {
		this.getHour();
	}

	getHour = () => {
		const date = new Date();
		const hour = date.getHours();
		this.setState({
			hour
		});
	};

	render() {
		// Choose appropriate greeting
		let greeting;
		if (this.state.hour < 12) greeting = "Good Morning";
		else if (this.state.hour > 12 && this.state.hour < 17)
			greeting = "Good Afternoon";
		else greeting = "Good Evening";

		return (
			<div className="greeting_div">
				<div className="greeting_title_div">
					<span className="greeting_title"> {greeting} </span>
				</div>
				<div className="greeting_message_div">
					<p className="greeting_message">
						My name is <span className="hl"> Tahmid Khan </span>. I am a
						recently graduated student of the{" "}
						<strong> University of California San Diego </strong> with a major
						in <span className="hl"> Computer Science </span> and minor in{" "}
						<span className="hl"> Mathematics </span>.
					</p>
				</div>
			</div>
		);
	}
}

export default Home;
