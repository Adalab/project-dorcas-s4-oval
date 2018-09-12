import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Keys from './keys/keys';

const urlDataTrello = `https://api.trello.com/1/boards/n70jUITJ/lists?cards=all&card_fields=id%2Cname%2CidMembers%2Clabels&filter=open&fields=id%2Cname&key=${Keys.trello.key}&token=${Keys.trello.token}`;
const urlUsersTrello = `https://api.trello.com/1/boards/n70jUITJ/members?key=${Keys.trello.key}&token=${Keys.trello.token}`;
const urlLabelsTrello = `https://api.trello.com/1/boards/n70jUITJ/lists?cards=all&card_fields=id%2Cname%2Clabels&card_members=true&card_member_fields=name%2Cusername&filter=open&fields=id%2Cname&key=${Keys.trello.key}&token=${Keys.trello.token}`;

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			usersTrello: [],
			dataLists: [],
			dataLabels: [],
			dataSatisfaction: [],
			dataCardsByLists: null,
			dataCardsByLabels: null
		}
	}

// ======== REACT LIFECYCLE METHODS
	componentDidMount() {
		this.getUsersTrello();
		this.getDataTrello();
		this.getLabelsTrello();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.dataLists !== this.state.dataLists) {
				this.generateDataCardsByLists();
		}
		if (prevState.dataLabels !== this.state.dataLabels) {
				this.generateDataCardsByLabels();
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
				dataLists: data
			});
	});
}
getLabelsTrello = () => {
	fetch(urlLabelsTrello)
	.then(response => response.json())
	.then(data => {
		this.setState({
			dataLabels: data
		});
});
}

// ======== GENERATE CHARTS DATA

//------ TRELLO

//-- Lists/Cards

generateDataCardsByLists = () => {
	let dataCardsByLists = [];
	for (const item of this.state.dataLists) {
		const itemToPush =
			{
			  arg: item.name,
			  val: item.cards.length
			}
		dataCardsByLists.push(itemToPush);
	}
	this.setState({
		dataCardsByLists
	});
}
//-- Labels/Cards

generateDataCardsByLabels = () => {
	let dataCardsByLabels = [];
	for (const item of this.state.dataLists) {
		const itemToPush =
			{
			  arg: item.name,
			  val: item.cards.length
			}
		dataCardsByLabels.push(itemToPush);
	}
	this.setState({
		dataCardsByLabels
	});
}

  render() {

    return (
      <div className="App">
		<Header />

		{this.state.dataCardsByLists && this.state.dataCardsByLabels ?
		<Main
			dataLists = {this.state.dataLists}
			dataSatisfaction = {this.state.dataSatisfaction}
			dataCardsByLists={this.state.dataCardsByLists}
			dataCardsByLabels={this.state.dataCardsByLabels}

		 />
		 : <p className="loading">Loading data</p>
	 	}
      </div>
    );
  }
}

export default App;
