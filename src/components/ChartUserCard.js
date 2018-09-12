import React from 'react';
import '../styles/ChartUserCard.css';
import MultipleBarChart from './MultipleBarChart';

class ChartUserCard extends React.Component {

	render () {

		return (
			<div className="graphic__container">
					<MultipleBarChart/>
			</div>
		);
	}

}

export default ChartUserCard;
