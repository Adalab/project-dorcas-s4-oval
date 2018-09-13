import React from 'react';
import '../styles/ChartLabel.css';
import Donought from './Donought';

class ChartLabel extends React.Component {

	render () {

		return (
			<div className="graphic__container">

				<h4 className="chart__title">Number of Cards by Labels</h4>

				<Donought
					 dataSource={this.props.dataCardsByLabels}
					 title={"Number of Cards by Labels"}
			 	/>
			</div>
		);
	}

}

export default ChartLabel;
