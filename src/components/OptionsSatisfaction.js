import React from "react";
import "../styles/OptionsSatisfaction.css";

class OptionsSatisfaction extends React.Component {
  render() {
    return (
      <div className="col-2 h-100 satisfation__menu">
        <div className="container__date-input">
          <div className="container__date">
            <label htmlFor="day_init">Fecha de inicio</label>
            <input type="date" />
          </div>
          <div className="container__date">
            <label htmlFor="party">Fecha de fin</label>
            <input type="date" />
          </div>
        </div>
      </div>
    );
  }
}

export default OptionsSatisfaction;
