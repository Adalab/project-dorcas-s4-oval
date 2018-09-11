import React from 'react';
import Chart, {Series, Label, Legend, SeriesTemplate} from 'devextreme-react/ui/chart';


const dataSource = {

    datos: [
    {
      region: "Asia",
      val: 4119626293
    }, 
    {
      region: "Africa",
      val: 1012956064
    }, 
    {
      region: "Northern America",
      val: 344124520
    }, 
    {
      region: "Latin America and the Caribbean",
      val: 590946440
    }, 
    {
      region: "Europe",
      val: 727082222
    }, 
    {
      region: "Oceania",
      val: 35104756
    }
  ]
};

class BarChart extends React.Component {
render(){
return (
    <Chart
    type={"bar"}
    palette={"Violet"}
    dataSource={dataSource.datos}
    title={'Label Card by User'}
  >

  <Legend
      horizontalAlignment={"center"}
      verticalAlignment={"bottom"}
      margin={10}
  ></Legend>

  <SeriesTemplate
      nameField={'region'}
  >
  </SeriesTemplate>

  </Chart>
 );
 }
}

export default BarChart;