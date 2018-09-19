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
                lists={this.props.lists}
                dataUsers={this.props.dataUsers}
                dataLists={this.props.dataLists}
                dataCardsByLists={this.props.dataCardsByLists}
                dataCardsByLabels={this.props.dataCardsByLabels}
                dataUsersLabels={this.props.dataUsersLabels}
                labels={this.props.labels}
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
