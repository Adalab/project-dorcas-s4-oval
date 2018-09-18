import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Keys from "./keys/keys";
import * as _ from "lodash";

const urlDataTrello = `https://api.trello.com/1/boards/n70jUITJ/lists?cards=all&card_fields=id%2Cname%2CidMembers%2Clabels&filter=open&fields=id%2Cname&key=${
  Keys.trello.key
}&token=${Keys.trello.token}`;
const urlUsersTrello = `https://api.trello.com/1/boards/n70jUITJ/members?key=${
  Keys.trello.key
}&token=${Keys.trello.token}`;
const urlLabelsTrello = `https://api.trello.com/1/boards/n70jUITJ/labels?fields=id%2Cname&key=${
  Keys.trello.key
}&token=${Keys.trello.token}`;
const urlLabelsAndCardsTrello = `https://api.trello.com/1/boards/n70jUITJ/cards/?fields=name,idList,idLabels&key=${
  Keys.trello.key
}&token=${Keys.trello.token}`;
const dataFetch = `https://api.trello.com/1/boards/BqZWFU8v/cards?key=${
  Keys.trello.key
}&token=${Keys.trello.token}`;
const memberFetch = `https://api.trello.com/1/boards/BqZWFU8v/members?key=${
  Keys.trello.key
}&token=${Keys.trello.token}`;
const listFetch = `https://api.trello.com/1/boards/BqZWFU8v/lists?key=${
  Keys.trello.key
}&token=${Keys.trello.token}`;

let dataList = [];
let teste = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.lists = [];
    this.users = [];
    this.cards = [];

    this.state = {
      usersTrello: [],
      dataLists: [],
      dataLabels: [],
      dataSatisfaction: [],
      dataCardsByLists: null,
      trelloLabels: [],
      dataCardsByLabels: null,
      dataTrello: [],
      dataUsers: null,
      dataList: []
    };
  }
  // ======== REACT LIFECYCLE METHODS
  componentDidMount() {
    this.getUsersTrello();
    this.getDataTrello();
    this.getLabelsTrello();
    this.getData();
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
  };

  getDataTrello = () => {
    fetch(urlDataTrello)
      .then(response => response.json())
      .then(data => {
        this.setState({
          dataLists: data
        });
        return this.state.dataLists;
      })
      .then(() => this.generateDataCardsByLists());
  };
  getLabelsTrello = () => {
    fetch(urlLabelsTrello)
      .then(response => response.json())
      .then(data => {
        this.setState({
          trelloLabels: data
        });
      });
    fetch(urlLabelsAndCardsTrello)
      .then(response => response.json())
      .then(data => {
        this.setState({
          dataLabels: data
        });
        return this.state.dataLabels;
      })
      .then(() => this.generateDataCardsByLabels());
  };

  // ======== GENERATE CHARTS DATA

  //------ TRELLO

  //-- Lists/Cards

  generateDataCardsByLists = () => {
    let dataCardsByLists = [];
    for (const item of this.state.dataLists) {
      const itemToPush = {
        arg: item.name,
        val: item.cards.length
      };
      dataCardsByLists.push(itemToPush);
    }
    this.setState({
      dataCardsByLists
    });
  };
  //-- Labels/Cards

  generateDataCardsByLabels = () => {
    let dataCardsByLabels = [];

    for (const item of this.state.trelloLabels) {
      const itemToPush = {
        arg: item.id,
        val: 0
      };
      dataCardsByLabels.push(itemToPush);
    }

    for (const item of this.state.dataLabels) {
      for (let i = 0; i < item.idLabels.length; i++) {
        const label = item.idLabels[i];
        for (const eachLabel of dataCardsByLabels) {
          if (eachLabel.arg === label) {
            eachLabel.val++;
          }
        }
      }
    }

    for (const item of dataCardsByLabels) {
      const labelIdToChange = item.arg;
      for (const eachOne of this.state.trelloLabels) {
        if (labelIdToChange === eachOne.id) {
          item.arg = eachOne.name;
        }
      }
    }
    this.setState({
      dataCardsByLabels
    });
  };
  /////////////////////////////////////////////////////////////////////////////

  getData() {
    let self = this;
    fetch(dataFetch)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        self.cards = data;
        return fetch(memberFetch);
      })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        self.members = data;
        return fetch(listFetch);
      })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        self.lists = data;

        let users = _.map(self.members, member => {
          let v = {
            idMember: member.id,
            user: member.fullName,
            listas: []
          };

          _.forEach(self.lists, l => {
            v.listas[l.id] = 0;
          });

          return v;
        });

        users = _.keyBy(users, "idMember");

        _.forEach(self.cards, card => {
          _.forEach(card.idMembers, idMember => {
            users[idMember].listas[card.idList]++;
          });
        });

        _.forEach(users, u => {
          _.forEach(self.lists, l => {
            u[l.name.toLowerCase()] = u.listas[l.id];
          });
          delete u.idMember;
          delete u.listas;
        });

        users = _.values(users);

        this.setState({ dataUsers: users, dataList: data });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataUsers !== this.state.dataUsers) {
      this.getLists();
    }
  }
  getLists() {
    console.log(this.state.dataUsers);
    for (const object of this.state.dataUsers) {
      for (let i in object) {
        if (typeof object[i] === "number") {
          dataList.push(i);
        }
      }
    }
    dataList = [...new Set(dataList)];
    console.log(dataList);
    for (const list of dataList) {
      teste.push(`<Series valueField="${list}" name="${list}" />`);
    }
    console.log(teste);
  }

  render() {
    return (
      <div className="App">
        <Header />

        {/* {this.state.dataCardsByLists && this.state.dataCardsByLabels ? */}
        <Main
          dataUsers={this.state.dataUsers}
          dataLists={this.state.dataLists}
          dataSatisfaction={this.state.dataSatisfaction}
          dataCardsByLists={this.state.dataCardsByLists}
          dataCardsByLabels={this.state.dataCardsByLabels}
        />
        {/* : <p className="loading">Loading data</p> */}
        {/* } */}
      </div>
    );
  }
}

export default App;
