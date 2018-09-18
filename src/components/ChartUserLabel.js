import React from 'react';
import '../styles/ChartUserLabel.css';
import BarChart from './BarChart';

class ChartUserLabel extends React.Component {

	render () {

		return (
			<div className="graphic__container">

				<h4 className="chart__title">Cards by Users/Lists</h4>

				<BarChart />
			</div>
		);
	}

}

export default ChartUserLabel;
