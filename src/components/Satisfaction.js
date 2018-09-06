import React from 'react';
import '../styles/Satisfaction.css';

class Satisfaction extends React.Component {

  render() {

    return (
      <section className="section__satisfaction">
        <div class="row h-100">
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

          <div class="col-10 h-100 satisfation__info">
            <div className="satisfation__media-equip">
              <div className="satisfaction__media-equip--data media-equip__title">title</div>
              <div className="satisfaction__media-equip--data media-equip__initial-data">initial media</div>
              <div className="satisfaction__media-equip--data media-equip__end-data">final media</div>
              <div className="satisfaction__media-equip--data media-equip__job-data">job media</div>
            </div>

            <div className="satisfation__media-personal">
              <div className="satisfaction__media-personal--data media-personal1">user 1</div>
              <div className="satisfaction__media-personal--data media-personal2">user 2</div>
              <div className="satisfaction__media-personal--data media-personal3">user 3</div>
              <div className="satisfaction__media-personal--data media-personal4">user 4</div>
            </div>

          </div>
        </div>
      </section>
    );
  }

}

export default Satisfaction;
