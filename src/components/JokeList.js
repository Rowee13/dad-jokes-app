import { Component } from "react";

import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends Component {
	render() {
		return (
			<div>
				<Joke />
			</div>
		);
	}
}

export default JokeList;
