import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Keys from './keys/keys';

const urlDataTrello = `https://api.trello.com/1/boards/n70jUITJ/lists?cards=all&card_fields=id%2Cname%2CidMembers%2Clabels&filter=open&fields=id%2Cname&key=${Keys.trello.key}&token=${Keys.trello.token}`;

const urlUsersTrello = `https://api.trello.com/1/boards/n70jUITJ/members?key=${Keys.trello.key}&token=${Keys.trello.token}`;


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			usersTrello: [],
			dataPlanning: [],
			dataSatisfaction: []
		}
	}

	componentDidMount() {
		this.getUsersTrello();
		this.getDataTrello();
	}

	// API accesses
	getUsersTrello = () => {
		fetch(urlUsersTrello)
		.then(response => response.json())
		.then(data => {
			this.setState({
				usersTrello: data
			});
		});
	}

	getDataTrello = () => {
		fetch(urlDataTrello)
		.then(response => response.json())
		.then(data => {
			this.setState({
				dataPlanning: data
			});
	});

}

  render() {

    return (
      <div className="App">
		<Header />
		<Main
			dataPlanning = {this.state.dataPlanning}
			dataSatisfaction = {this.state.dataSatisfaction}

		 />
      </div>
    );
  }
}

export default App;
