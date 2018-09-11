import React from "react";
import "../styles/Planning.css";
import ChartLabel from "./ChartLabel";
import ChartCard from "./ChartCard";
import ChartUserCard from "./ChartUserCard";
import ChartUserLabel from "./ChartUserLabel";
import OptionsDynamic from "./OptionsDynamic";
import ChartDynamic from "./ChartDynamic";

class Planning extends React.Component {
  render() {
    return (
      <section className="section__planning">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col column__planning--chart">
              <div className="container__planning--chart">
                <ChartLabel
                  dataPlanning = {this.props.dataPlanning}
                />
              </div>
              <div className="container__planning--chart">
                <ChartUserLabel
                  dataPlanning = {this.props.dataPlanning}
                />
              </div>
            </div>
            <div className="col column__planning--chart">
              <div className="container__planning--chart">
                <ChartCard
                  dataPlanning = {this.props.dataPlanning}
                />
              </div>
              <div className="container__planning--chart">
                <OptionsDynamic
                  dataPlanning = {this.props.dataPlanning}
                />
              </div>
            </div>
            <div className="col column__planning--chart">
              <div className="container__planning--chart">
                <ChartUserCard
                  dataPlanning = {this.props.dataPlanning}
                 />
              </div>
              <div className="container__planning--chart">
                <ChartDynamic
                  dataPlanning = {this.props.dataPlanning}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Planning;
