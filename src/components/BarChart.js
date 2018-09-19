import React from "react";
import Chart, {
  CommonSeriesSettings,
  Series,
  Legend,
  Tooltip,
  LoadingIndicator,
  ArgumentAxis,
  ArgumentAxisLabel
} from "devextreme-react/ui/chart";

class BarChart extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.dataUsers && this.props.lists ? (
          <Chart dataSource={this.props.dataUsers} title={" "}>
            <CommonSeriesSettings
              argumentField={"user"}
              type={"bar"}
              hoverMode={"allArgumentPoints"}
            />
            <ArgumentAxis>
              <ArgumentAxisLabel overlappingBehavior={"stagger"} />
            </ArgumentAxis>
            <LoadingIndicator show={true} />

            {this.props.lists.map(list => {
              return <Series valueField={list} name={list} />;
            })}

            <Legend verticalAlignment={"top"} horizontalAlignment={"right"} />

            <Tooltip enabled={true} shared={true} />
          </Chart>
        ) : null}
      </React.Fragment>
    );
  }
}

export default BarChart;
