import React from 'react';
import '../styles/ChartLabel.css';
import donut from '../images/donut.jpeg';

class ChartLabel extends React.Component {

	render () {

		return (
			<div className="graphic__container">
					<img src={donut} alt="img" className="ChartLabel__img"/>
			</div>
		);
	}

}

export default ChartLabel;
