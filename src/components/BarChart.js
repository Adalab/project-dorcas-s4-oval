import React from "react";
import Chart, {
  CommonSeriesSettings,
  Series,
  Legend,
  Tooltip
} from "devextreme-react/ui/chart";

class BarChart extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.dataUsers ? (
          <Chart dataSource={this.props.dataUsers} title={" "}>
            <CommonSeriesSettings
              argumentField={"user"}
              type={"bar"}
              hoverMode={"allArgumentPoints"}
            />

            {/* { dataList.map( list => <Series valueField={list} name={list} />) } */}

            {/* {teste.map( item => item )} */}

            <Series valueField="documentación" name="documentación" />
            <Series valueField="roles" name="roles" />
            <Series valueField="hitos" name="hitos" />
            <Series valueField="backlog" name="backlog" />
            <Series valueField="sprint backlog" name="sprint backlog" />
            <Series valueField="en progreso" name="en progreso" />
            <Series
              valueField="en aprobación/validación/pr"
              name="en aprobación/validación/pr"
            />
            <Series valueField="terminadas" name="terminadas" />
            <Series valueField="bloqueadas" name="bloqueadas" />
            <Series valueField="sprints" name="sprints" />

            <Legend verticalAlignment={"top"} horizontalAlignment={"right"} />

            <Tooltip enabled={true} shared={true} />
          </Chart>
        ) : null}
      </React.Fragment>
    );
  }
}

export default BarChart;
