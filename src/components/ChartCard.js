import React from 'react';
import '../styles/ChartCard.css';
import Donought from './Donought';

class ChartCard extends React.Component {

	render () {

		return (

			<div className="graphic__container">
				<Donought dataSource={this.props.dataCardsByLists}
			/>
			</div>

		);
	}

}

export default ChartCard;
