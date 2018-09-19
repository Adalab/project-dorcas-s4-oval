import React from "react";
import "../styles/Planning.css";
import ChartLabel from "./ChartLabel";
import ChartCard from "./ChartCard";
import ChartUserCard from "./ChartUserCard";
import ChartUserLabel from "./ChartUserLabel";
import OptionsDynamic from "./OptionsDynamic";

class Planning extends React.Component {
  render() {
    return (
      <section className="section__planning">
        <div className="container-fluid options-charts">
          <OptionsDynamic />
        </div>
        <div className="main__charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="chart">
                  <div className="chart__item">
                    <ChartCard
                      dataLists={this.props.dataLists}
                      dataCardsByLists={this.props.dataCardsByLists}
                    />
                  </div>
                </div>

                <div className="chart">
                  <div className="chart__item">
                    <ChartLabel
                      dataCardsByLabels={this.props.dataCardsByLabels}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="chart">
                  <div className="chart__item">
                    <ChartUserLabel
                      dataUsers={this.props.dataUsers}
                      lists={this.props.lists}
                    />
                  </div>
                </div>
                <div className="chart">
                  <div className="chart__item">
                    <ChartUserCard 
                      dataUsersLabels={this.props.dataUsersLabels}
                      labels={this.props.labels}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Planning;
