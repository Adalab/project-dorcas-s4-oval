import React from 'react';
import Planning from './Planning';
import Satisfaction from './Satisfaction';
import '../styles/Main.css';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {

	render () {

		return (
			<main className="main">
				<Switch>
					<Route path='/planning' component={Planning} />
					<Route path='/satisfaction' component={Satisfaction} />
				</Switch>
			</main>

		);
	}

}

export default Main;
