import React from 'react';
import Chart, {Series, Label, Legend, SeriesTemplate} from 'devextreme-react/ui/chart';


const dataSource = [
    {
    state: "China",
    oil: 4.95,
    gas: 2.85,
    coal: 45.56
}, {
    state: "Russia",
    oil: 12.94,
    gas: 17.66,
    coal: 4.13
}, {
    state: "USA",
    oil: 8.51,
    gas: 19.87,
    coal: 15.84
}, {
    state: "Iran",
    oil: 5.3,
    gas: 4.39
}, {
    state: "Canada",
    oil: 4.08,
    gas: 5.4
}, {
    state: "Saudi Arabia",
    oil: 12.03
}, {
    state: "Mexico",
    oil: 3.86
}
];

class BarChart extends React.Component {
render(){
return (
    <Chart
    type={"bar"}
    palette={"Violet"}
    dataSource={dataSource}
    title={'Label Card by User'}
  >

  <Legend
      horizontalAlignment={"center"}
      verticalAlignment={"bottom"}
      margin={10}
  ></Legend>

  <Series
      valueField={'oil'}
      name={"Oil Production"}
  >
  </Series>
  <Series
      valueField={'gas'}
      name={"Gas Production"}
  >
  </Series>
  <Series
      valueField={'coal'}
      name={"Coal Production"}
  >
  </Series>

  </Chart>
 );
 }
}

export default BarChart;