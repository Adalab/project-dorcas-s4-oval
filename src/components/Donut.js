import React from 'react';
import PieChart, { Series, Label, Tooltip, Legend, LoadingIndicator } from 'devextreme-react/ui/pie-chart';

class Donought extends React.Component {

	customizeText = point => {
		if (point.value === 0) {
			return;
		} else {
			return point.argumentText + ' : ' + point.value;
		}
	}

	render() {

		return (

			<PieChart
				type={"doughnut"}
				palette={"Soft Pastel"}
				dataSource={this.props.dataSource}
			>

				<Series
					argumentField={'arg'}
				>
					<LoadingIndicator show={true} />

					<Label
						argumentField={'arg'}
						visible={true}
						connector={{ visible: true }}
						customizeText={this.customizeText}
					/>

				</Series>

				<Legend
					visible={false}
				/>

				<Tooltip
					enabled={true}
					shared={true}
				/>

			</PieChart>

		);
	}
}

export default Donought;
