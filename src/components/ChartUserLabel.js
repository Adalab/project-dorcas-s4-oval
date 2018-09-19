import React from "react";
import "../styles/ChartUserLabel.css";
import BarChart from "./BarChart";

class ChartUserLabel extends React.Component {
  render() {
    return (
      <div className="graphic__container">
        <h4 className="chart__title">Cards by Users/Lists</h4>

        <BarChart dataUsers={this.props.dataUsers} lists={this.props.lists}  />
      </div>
    );
  }
}

export default ChartUserLabel;
