import React from "react";

class OptionsSatisfaction extends React.Component {
  render() {
    return (
      <div className="col-2 h-100 satisfation__menu">
        <div className="container__date-input">
          <div className="container__date date-box__init">
            <label htmlFor="day_init">From</label>
            <input type="date" />
          </div>
          <div className="container__date date-box__end">
            <label htmlFor="day_end">To</label>
            <input type="date" />
          </div>
        </div>
      </div>
    );
  }
}

export default OptionsSatisfaction;
