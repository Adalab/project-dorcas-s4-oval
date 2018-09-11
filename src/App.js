import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Keys from './keys/keys';

const urlTrello = `https://api.trello.com/1/boards/n70jUITJ/lists?cards=all&card_fields=id%2Cname%2CidMembers%2Clabels&filter=open&fields=id%2Cname&key=${key}&token=${token}`;

class App extends Component {
constructor(props) {
	super(props)

	this.state = {
		dataPlanning: [],
		dataSatisfaction: []
	}
}


componentDidMount() {

}


  render() {
    return (
      <div className="App">
		<Header />
		<Main />
      </div>
    );
  }
}

export default App;
