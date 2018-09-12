import React from 'react';
import Chart, {
    ArgumentAxis,
    ArgumentAxisLabel,
    CommonSeriesSettings,
    Legend,
    Series,
    Label,
    Tooltip,
    ValueAxis,
    ValueAxisConstantLine,
    ValueAxisConstantLineLabel,
    ValueAxisLabel,
    VerticalLineLabelFormat
  } from "devextreme-react/ui/chart";

  const dataUserCard = [
    {
      user: "Aylen",
      backlog: 5,
      nexsprint: 4,
      sprint: 5,
      todo:5,
      doing:8,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
    {
      user: "Laura M",
      backlog: 7,
      nexsprint: 2,
      sprint: 3,
      todo:1,
      doing:4,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
    {
      user: "Laura D",
      backlog: 1,
      nexsprint: 9,
      sprint: 6,
      todo:5,
      doing:4,
      blockedortesting:0,
      done:0,
      dismiss:0
    },
    {
      user: "Anna",
      backlog: 5,
      nexsprint: 0,
      sprint: 5,
      todo:8,
      doing:7,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
    {
      user: "Carlos",
      backlog: 5,
      nexsprint: 8,
      sprint: 2,
      todo:1,
      doing:8,
      blockedortesting:3,
      done:0,
      dismiss:0
    },
    {
      user: "Hector",
      backlog: 5,
      nexsprint: 7,
      sprint: 3,
      todo:1,
      doing:8,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
  ];

class MultipleBarChart extends React.Component {
render(){
return (
    <Chart
    dataSource={dataArray}
    title="User Cards"
  >
    <CommonSeriesSettings
      argumentField={"user"}
      type={"bar"}
      hoverMode={"allArgumentPoints"}
    />

    <Series valueField={"backlog"} name={"Backlog"} />
    <Series valueField={"nexsprint"} name={"Nex Sprint"} />
    <Series valueField={"sprint"} name={"Sprint"} />
    <Series valueField={"todo"} name={"To do"} />
    <Series valueField={"doing"} name={"Doing"} />
    <Series valueField={"blockedortesting"} name={"Blocked or testing"} />
    <Series valueField={"done"} name={"Done"} />
    <Series valueField={"Dismiss"} name={"Dismiss"} />


  </Chart>
 );
 }
}

export default MultipleBarChart;
