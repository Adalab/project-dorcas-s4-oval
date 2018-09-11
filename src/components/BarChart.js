import React from 'react';
import Chart, {ArgumentAxis,
    ArgumentAxisLabel,
    CommonSeriesSettings,
    Legend,
    Series,
    Tooltip,
    ValueAxis,
    ValueAxisConstantLine,
    ValueAxisConstantLineLabel,
    ValueAxisLabel} from 'devextreme-react/ui/chart';


const dataSource = [
    {
    user: "Anna",
    cards: 10
}, {
    user: "Laura D",
    cards: 15
},{
    user: "Aylen",
    cards: 12
}, {
    user: "Laura M",
    cards: 8
}
];

class BarChart extends React.Component {
render(){
return (
    <Chart
    dataSource={dataSource}
    title='User Labels'
  >

  <Series
     title={'User Labels'}
      valueField={'cards'}
      argumentField={'user'}
      type={'bar'}  >
  </Series>
  
  </Chart>
 );
 }
}

export default BarChart;