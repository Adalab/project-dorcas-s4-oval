import React from "react";
import "../styles/ChartCard.css";
import Donut from "./Donut";

class ChartCard extends React.Component {
  render() {
    return (
      <div className="graphic__container">
        <Donut
          dataSource={this.props.dataCardsByLists}
          title={"Number of Cards by Lists"}
        />
      </div>
    );
  }
}

export default ChartCard;
