import React from "react";
import "../styles/ChartLabel.css";
import Donut from "./Donut";

class ChartLabel extends React.Component {
  render() {
    return (
      <div className="graphic__container">
        <Donut
          dataSource={this.props.dataCardsByLabels}
          title={"Number of Cards by Labels"}
        />
      </div>
    );
  }
}

export default ChartLabel;
