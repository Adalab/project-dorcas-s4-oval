import React from 'react';
import '../styles/ChartCard.css';
import Donought from './Donought';

class ChartCard extends React.Component {

	render () {

		return (

			<div className="graphic__container">

				<h4 className="chart__title">Number of Cards by Lists</h4>

				<Donought
					 dataSource={this.props.dataCardsByLists}
				 />
			</div>

		);
	}

}

export default ChartCard;
