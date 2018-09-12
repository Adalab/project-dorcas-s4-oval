import React from 'react';
import PieChart, {Series, Label, Legend} from 'devextreme-react/ui/pie-chart';

class Donought extends React.Component {

	render(){

		return (

				<PieChart
					type={"doughnut"}
					palette={"Soft Pastel"}
					dataSource={this.props.dataSource}
					title={'Number of Cards by Lists'}
				  >

				  <Legend
					  horizontalAlignment={"left"}
					  verticalAlignment={"bottom"}
					  margin={10}
				  ></Legend>

				  <Series
					  argumentField={'list'}
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
