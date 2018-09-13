import React from 'react';
import '../styles/ChartUserCard.css';
import MultipleBarChart from './MultipleBarChart';

class ChartUserCard extends React.Component {

	render () {

		return (
			<div className="graphic__container">

				<h4 className="chart__title">Cards by Users/Lists</h4>

					<MultipleBarChart className="chart_bars--adjustments"/>
			</div>
		);
	}

}

export default ChartUserCard;
