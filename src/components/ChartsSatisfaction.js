import React from "react";
import "../styles/ChartsSatisfaction.css";

class ChartsSatisfaction extends React.Component {
  render() {
    return (
      <div className="satisfation__media-personal">
        <div className="satisfaction__media-personal--data media-personal1">
          user 1
        </div>
        <div className="satisfaction__media-personal--data media-personal2">
          user 2
        </div>
        <div className="satisfaction__media-personal--data media-personal3">
          user 3
        </div>
        <div className="satisfaction__media-personal--data media-personal4">
          user 4
        </div>
      </div>
    );
  }
}

export default ChartsSatisfaction;
