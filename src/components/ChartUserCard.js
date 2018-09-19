import React from "react";
import "../styles/ChartUserCard.css";
import MultipleBarChart from "./MultipleBarChart";
import BarChart from "./BarChart";

class ChartUserCard extends React.Component {
  render() {
    return (
      <div className="graphic__container">
        <h4 className="chart__title">Cards by Users/Labels</h4>

        <BarChart className="chart_bars--adjustments" 
             dataUsers={this.props.dataUsersLabels}
             lists={this.props.labels} />
      </div>
    );
  }
}

export default ChartUserCard;
