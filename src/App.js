import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Keys from './keys/keys';

const urlDataTrello = `https://api.trello.com/1/boards/n70jUITJ/lists?cards=all&card_fields=id%2Cname%2CidMembers%2Clabels&filter=open&fields=id%2Cname&key=${Keys.trello.key}&token=${Keys.trello.token}`;
const urlUsersTrello = `https://api.trello.com/1/boards/n70jUITJ/members?key=${Keys.trello.key}&token=${Keys.trello.token}`;
let dataCardsByLists = [];


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			usersTrello: [],
			dataPlanning: [],
			dataSatisfaction: [],
			dataCardsByLists: null
		}
	}

// ======== REACT LIFECYCLE METHODS
	componentDidMount() {
		this.getUsersTrello();
		this.getDataTrello();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.dataPlanning !== this.state.dataPlanning) {
				this.generateDataCardsByLists();
		}
	}

// ======== API accesses
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

// ======== GENERATE CHARTS DATA

//------ TRELLO

//-- Lists/Cards

generateDataCardsByLists = () => {

	for (const list of this.state.dataPlanning) {
		const item =
			{
			  list: list.name,
			  val: list.cards.length
			}
		dataCardsByLists.push(item);
	}
	this.setState({
		dataCardsByLists
	});
}

  render() {

    return (
      <div className="App">
		<Header />

		{this.state.dataCardsByLists ?
		<Main
			dataPlanning = {this.state.dataPlanning}
			dataSatisfaction = {this.state.dataSatisfaction}
			dataCardsByLists={dataCardsByLists}
		 />
		 : <p className="loading">Loading data</p>
	 	}
      </div>
    );
  }
}

export default App;
