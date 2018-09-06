import React from "react";
import "../styles/Satisfaction.css";
import OptionsSatisfaction from "./OptionsSatisfaction";
import MediaSatisfaction from "./MediaSatisfaction";
import ChartsSatisfaction from "./ChartsSatisfaction";

class Satisfaction extends React.Component {
  render() {
    return (
      <section className="section__satisfaction">
        <div class="row h-100">
          <OptionsSatisfaction />
          <div class="col-10 h-100 satisfation__info">
            <MediaSatisfaction />
            <ChartsSatisfaction />
          </div>
        </div>
      </section>
    );
  }
}

export default Satisfaction;
