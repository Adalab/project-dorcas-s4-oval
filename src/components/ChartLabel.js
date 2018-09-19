import React from "react";
import Donut from "./Donut";

class ChartLabel extends React.Component {
  render() {
    return (
      <div className="graphic__container">
        <h4 className="chart__title">Number of Cards by Labels</h4>
        {this.props.dataCardsByLabels ? (
          <Donut dataSource={this.props.dataCardsByLabels} />
        ) : (
            <p>Loading Card</p>
          )}
      </div>
    );
  }
}

export default ChartLabel;
