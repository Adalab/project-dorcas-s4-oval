import React from 'react';
import '../styles/ChartUserLabel.css';
import bars2 from '../images/bars-2.jpeg';

class ChartUserLabel extends React.Component {

	render () {

		return (
			<div className="graphic__container">
					<img src={bars2} alt="img" className="ChartUserLabel__img"/>
			</div>
		);
	}

}

export default ChartUserLabel;
