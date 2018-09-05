import React from 'react';
import '../styles/Satisfaction.css';

class Satisfaction extends React.Component {

  render() {

    return (
      <section className="section__satisfaction">
        <div class="row h-100">
          <div class="col-2 h-100 satisfation__menu">
            <div className="container_date-input">
              <div className="container_date">
                <label for="day_init">Fecha de inicio</label>
                <input type="date" />
              </div>
              <div className="container_date">
                <label for="party">Fecha de fin</label>
                <input type="date" />
              </div>
            </div>
          </div>
          <div class="col-10 h-100 satisfation__info">
            <div className="satisfation__media-equip"></div>
            <div className="satisfation__media-personal"></div>
          </div>
        </div>
      </section>
    );
  }

}

export default Satisfaction;
