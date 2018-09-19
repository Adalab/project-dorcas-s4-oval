import React, {
  Component
} from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Keys from "./keys/keys";
import * as _ from "lodash";

const DASHBOARD = "n70jUITJ";

const urlDataTrello = `https://api.trello.com/1/boards/${DASHBOARD}/lists?cards=all&card_fields=id%2Cname%2CidMembers%2Clabels&filter=open&fields=id%2Cname&key=${
  Keys.trello.key
  }&token=${Keys.trello.token}`;
const urlLabelsTrello = `https://api.trello.com/1/boards/${DASHBOARD}/labels?fields=id%2Cname&key=${
  Keys.trello.key
  }&token=${Keys.trello.token}`;
const urlLabelsAndCardsTrello = `https://api.trello.com/1/boards/${DASHBOARD}/cards/?fields=name,idList,idLabels&key=${
  Keys.trello.key
  }&token=${Keys.trello.token}`;
const dataFetch = `https://api.trello.com/1/boards/${DASHBOARD}/cards?key=${
  Keys.trello.key
  }&token=${Keys.trello.token}`;
const memberFetch = `https://api.trello.com/1/boards/${DASHBOARD}/members?key=${
  Keys.trello.key
  }&token=${Keys.trello.token}`;
const listFetch = `https://api.trello.com/1/boards/${DASHBOARD}/lists?key=${
  Keys.trello.key
  }&token=${Keys.trello.token}`;
const labelFetch = `https://api.trello.com/1/boards/${DASHBOARD}/labels?key=${
  Keys.trello.key
  }&token=${Keys.trello.token}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.lists = [];
    this.users = [];
    this.cards = [];
    this.cardsLabels = [];
    this.labels = [];

    this.state = {
      usersTrello: [],
      dataLists: [],
      dataLabels: [],
      dataCardsByLists: null,
      trelloLabels: [],
      dataCardsByLabels: null,
      dataUsers: null,
      dataList: [],
      dataBoardlabels: [],
      dataUsersLabels: null,
      lists: null,
      labels: null
    };
  }
  // ======== REACT LIFECYCLE METHODS

  componentDidMount() {
    this.getDataTrello();
    this.getLabelsTrello();
    this.getData();
  }

  // ======== API accesses


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

  getData() {
    fetch(dataFetch)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.cards = data;
        return fetch(memberFetch);
      })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.members = data;
        this.setState({ usersTrello: data });
        return fetch(listFetch);
      })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.lists = data;
        return fetch(labelFetch);
      })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.labels = data;

        let users = _.map(this.members, member => {
          let v = {
            idMember: member.id,
            user: member.username,
            listas: []
          };

          _.forEach(this.lists, l => {
            v.listas[l.id] = 0;
          });

          return v;
        });

        users = _.keyBy(users, "idMember");
        _.forEach(this.cards, card => {
          _.forEach(card.idMembers, idMember => {
            users[idMember].listas[card.idList]++;
          });
        });
        console.log(users);
        _.forEach(users, u => {
          _.forEach(this.lists, l => {
            u[l.name.toLowerCase()] = u.listas[l.id];
          })

          delete u.idMember;
          delete u.listas;
        });
        users = _.values(users);

        let usersLabels = _.map(this.members, member => {
          let v = {
            idMember: member.id,
            user: member.username,
            labels: []
          };

          _.forEach(this.labels, l => {
            v.labels[l.id] = 0;
          });

          return v;
        });

        usersLabels = _.keyBy(usersLabels, "idMember");
        _.forEach(this.cards, card => {
          _.forEach(card.idMembers, idMember => {
            _.forEach(card.idLabels, idLabel => {
              usersLabels[idMember].labels[idLabel]++;
            })
          });
        });
        _.forEach(usersLabels, u => {

          _.forEach(this.labels, l => {
            u[l.name] = u.labels[l.id];
          });
          delete u.idMember;
          delete u.labels;
        });

        usersLabels = _.values(usersLabels);

        this.setState({
          dataUsers: users,
          dataList: this.lists,
          dataBoardlabels: this.labels,
          dataUsersLabels: usersLabels
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataUsers !== this.state.dataUsers) {
      this.getLists();
    }
    if (prevState.dataUsersLabels !== this.state.dataUsersLabels) {
      this.getLabels();
    }
  }

  getLists() {
    let dataList = [];

    for (const object of this.state.dataUsers) {
      for (let i in object) {
        if (typeof object[i] === "number") {
          dataList.push(i);
        }
      }
    }
    dataList = [...new Set(dataList)];
    this.setState({
      lists: dataList
    });
  }

  getLabels() {
    let dataLabels = [];

    for (const object of this.state.dataUsersLabels) {
      for (let i in object) {
        if (typeof object[i] === "number") {
          dataLabels.push(i);
        }
      }
    }
    dataLabels = [...new Set(dataLabels)];
    this.setState({
      labels: dataLabels
    });
  }

  render() {
    return (<div className="App" >
      <Header />
      {this.state.dataCardsByLists && this.state.dataCardsByLabels ?
        <Main lists={this.state.lists}
          dataUsers={this.state.dataUsers}
          dataLists={this.state.dataLists}
          dataSatisfaction={this.state.dataSatisfaction}
          dataCardsByLists={this.state.dataCardsByLists}
          dataCardsByLabels={this.state.dataCardsByLabels}
          dataUsersLabels={this.state.dataUsersLabels}
          labels={this.state.labels} />
        : <p className="loading">Loading data</p>
      }
    </div>
    );
  }
}

export default App;
