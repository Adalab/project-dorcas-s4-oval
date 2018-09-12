import React from 'react';
import PieChart, {Series, Label, Legend} from 'devextreme-react/ui/pie-chart';

class Donought extends React.Component {

	render(){

		return (

				<PieChart
					type={"doughnut"}
					palette={"Soft Pastel"}
					dataSource={this.props.dataSource}
					title={this.props.title}
				  >

				  <Legend
					  horizontalAlignment={"left"}
					  verticalAlignment={"bottom"}
					  margin={10}
				  ></Legend>

				  <Series
					  argumentField={'arg'}
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
