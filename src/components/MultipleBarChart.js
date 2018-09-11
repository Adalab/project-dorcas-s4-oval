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
  
  const dataArray = [
    {
      state: "Illinois",
      year1998: 423.721,
      year2001: 476.851,
      year2004: 528.904
    },
    {
      state: "Indiana",
      year1998: 178.719,
      year2001: 195.769,
      year2004: 227.271
    },
    {
      state: "Michigan",
      year1998: 308.845,
      year2001: 335.793,
      year2004: 372.576
    },
    {
      state: "Ohio",
      year1998: 348.555,
      year2001: 374.771,
      year2004: 418.258
    },
    {
      state: "Wisconsin",
      year1998: 160.274,
      year2001: 182.373,
      year2004: 211.727
    }
  ];

class MultipleBarChart extends React.Component {
render(){
return (
    <Chart
    dataSource={dataArray}
    title="User Cards"
  >
    <CommonSeriesSettings
      argumentField={"state"}
      type={"bar"}
      hoverMode={"allArgumentPoints"}
    />

    <Series valueField={"year2004"} name={"2004"} />
    <Series valueField={"year2001"} name={"2001"} />
    <Series valueField={"year1998"} name={"1998"} />

  </Chart>
 );
 }
}

export default MultipleBarChart;