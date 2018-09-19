import React from "react";
import "../styles/ChartsSatisfaction.css";
import barsUser from "../images/bars-users.jpg";
import Chart, {
    CommonSeriesSettings,
    Series
  } from "devextreme-react/ui/chart";

  const dataUserSatisfaction = [
  {
    user: "Aylen",
    initialstate: 8,
    finalestate: 10,
    dailysatisfaction: 9

  },
  {
    user: "Laura M",
    initialstate: 2,
    finalestate: 8,
    dailysatisfaction: 6
  },
  {
    user: "Laura D",
    initialstate: 3,
    finalestate: 9,
    dailysatisfaction: 7
  },
  {
    user: "Anna",
    initialstate: 7,
    estadofinal: 3,
    dailysatisfaction: 2
  },
  {
    user: "Carlos",
    initialstate: 5,
    finalestate: 4,
    dailysatisfaction: 5
  },
  {
    user: "Hector",
    initialstate: 1,
    finalestate: 3,
    dailysatisfaction: 10
  },
];

class ChartsSatisfaction extends React.Component {
  render() {
    return (
      <div className="satisfation__media-personal">
      <Chart
      dataSource={dataUserSatisfaction}
    title={" "}
    >
      <CommonSeriesSettings
        argumentField={"user"}
        type={"bar"}
        hoverMode={"allArgumentPoints"}
      />

      <Series valueField={"initialstate"} name={"Initial state"} />
      <Series valueField={"finalestate"} name={"Final state"} />
      <Series valueField={"dailysatisfaction"} name={"Daily satisfaction"} />

    </Chart>
      </div>
    );
  }
}

export default ChartsSatisfaction;
