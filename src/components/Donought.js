import React from 'react';
import PieChart, {Series, Label, Legend} from 'devextreme-react/ui/pie-chart';

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
  ]};

class Donought extends React.Component {
render(){
return (
    <PieChart
        type={"doughnut"}
        palette={"Soft Pastel"}
        dataSource={dataSource.datos}
        title={'The Population of Continents and Regions'}
      >

      <Legend
          horizontalAlignment={"left"}
          verticalAlignment={"bottom"}
          margin={10}
      ></Legend>

      <Series
          argumentField={'region'}
      >
      </Series>
     
      <Label
          visible={true}
        />

      </PieChart>
 );
 }
}

export default Donought;