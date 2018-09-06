import React from "react";
import "../styles/OptionsSatisfaction.css";

class OptionsSatisfaction extends React.Component {
  render() {
    return (
      <div class="col-2 h-100 satisfation__menu">
        <div className="container__date-input">
          <div className="container__date">
            <label for="day_init">Fecha de inicio</label>
            <input type="date" />
          </div>
          <div className="container__date">
            <label for="party">Fecha de fin</label>
            <input type="date" />
          </div>
        </div>
      </div>
    );
  }
}

export default OptionsSatisfaction;
