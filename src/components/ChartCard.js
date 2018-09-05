import React from 'react';
import '../styles/ChartCard.css';
import donut1 from '../images/donut-1.jpeg';

class ChartCard extends React.Component {

	render () {

		return (

			<div className="graphic__container">
				<img src={donut1} alt="img" className="ChartCard__img"/>
			</div>

		);
	}

}

export default ChartCard;
