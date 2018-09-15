import React from "react";
import Planning from "./Planning";
import Satisfaction from "./Satisfaction";
import { Route, Switch } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Planning
                dataLists={this.props.dataLists}
                dataCardsByLists={this.props.dataCardsByLists}
                dataCardsByLabels={this.props.dataCardsByLabels}
              />
            )}
          />
          <Route
            path="/satisfaction"
            render={props => (
              <Satisfaction dataSatisfaction={this.props.dataSatisfaction} />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
