import React from "react";
import "../styles/ChartsSatisfaction.css";
import barsUser from "../images/bars-users.jpg";

class ChartsSatisfaction extends React.Component {
  render() {
    return (
      <div className="satisfation__media-personal">
        <img src={barsUser} alt="" className="photo__media" />
      </div>
    );
  }
}

export default ChartsSatisfaction;
