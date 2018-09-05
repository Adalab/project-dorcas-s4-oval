import React from 'react';
import '../styles/ChartUserCard.css';
import bars1 from '../images/bars-1.jpeg';

class ChartUserCard extends React.Component {

	render () {

		return (
			<div className="graphic__container">
					<img src={bars1} alt="img" className="ChartUserCard__img"/>
			</div>
		);
	}

}

export default ChartUserCard;
