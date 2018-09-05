import React from 'react';
import Planning from './Planning';
import Satisfaction from './Satisfaction';
import '../styles/Main.css';

class Main extends React.Component {

	render () {

		return (
			<main className="main">
				<Planning />
				<Satisfaction />
			</main>

		);
	}

}

export default Main;
