import React from "react";
import PieChart, { Series, Label, Legend } from "devextreme-react/ui/pie-chart";

class Donut extends React.Component {
  render() {
    console.log(this.props.dataSource);

    return (
      <React.Fragment>
        <h4 className="chart__title">{this.props.title}</h4>

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

          <Series argumentField={"arg"} />

          <Label argumentField={"arg"} visible={true} />
        </PieChart>
      </React.Fragment>
    );
  }
}

export default Donut;
