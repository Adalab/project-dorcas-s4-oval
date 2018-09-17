import React from 'react';
import PieChart, {Series, Label, Legend} from 'devextreme-react/ui/pie-chart';

class Donought extends React.Component {

	render(){


//console.log(this.props.dataSource);

		return (

				<PieChart
					type={"doughnut"}
					palette={"Soft Pastel"}
					dataSource={this.props.dataSource}
				  >

				  <Legend
					  horizontalAlignment={"left"}
					  verticalAlignment={"bottom"}
					  margin={1}
				  />

				  <Series
					  argumentField={'arg'}
				  />

				  <Label
					  argumentField={'arg'}
					  visible={true}
					/>

				</PieChart>

		 );
	 }
}

export default Donought;
