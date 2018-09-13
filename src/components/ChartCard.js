import React from "react";
import "../styles/ChartCard.css";
import Donut from "./Donut";

class ChartCard extends React.Component {

	render () {

		return (

			<div className="graphic__container">

				<h4 className="chart__title">Number of Cards by Lists</h4>

				<Donut
					 dataSource={this.props.dataCardsByLists}
				 />
			</div>

		);
	}

}

export default ChartCard;
