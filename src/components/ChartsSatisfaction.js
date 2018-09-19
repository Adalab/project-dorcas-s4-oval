import React from "react";
import "../styles/ChartsSatisfaction.css";
import barsUser from "../images/bars-users.jpg";
import Chart, {
    CommonSeriesSettings,
    Series,
	LoadingIndicator,
	Legend,
	Tooltip
  } from "devextreme-react/ui/chart";

class ChartsSatisfaction extends React.Component {
  render() {
    return (
      <div className="satisfation__media-personal">
		  <div className="satisfaction__chart-container">
      <Chart
      dataSource={this.props.dataUserSatisfaction}
    title={" "}
    >
      <CommonSeriesSettings
        argumentField={"user"}
        type={"bar"}
        hoverMode={"allArgumentPoints"}
      />

	  <LoadingIndicator show={true} />

      <Series valueField={"initialstate"} name={"Initial state"} />
      <Series valueField={"finalestate"} name={"Final state"} />
      <Series valueField={"dailysatisfaction"} name={"Daily satisfaction"} />

	  <Legend verticalAlignment={"bottom"} horizontalAlignment={"center"} />

	  <Tooltip enabled={true} shared={true} />

    </Chart>
	</div>
      </div>
    );
  }
}

export default ChartsSatisfaction;
