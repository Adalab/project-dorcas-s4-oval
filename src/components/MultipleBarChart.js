import React from 'react';
import Chart, {
    CommonSeriesSettings,
    Series
  } from "devextreme-react/ui/chart";
  import * as _ from 'lodash';


  const dataUserCard = [
    {
      user: "Aylen",
      backlog: 5,
      nexsprint: 4,
      sprint: 5,
      todo:5,
      doing:8,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
    {
      user: "Laura M",
      backlog: 7,
      nexsprint: 2,
      sprint: 3,
      todo:1,
      doing:4,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
    {
      user: "Laura D",
      backlog: 1,
      nexsprint: 9,
      sprint: 6,
      todo:5,
      doing:4,
      blockedortesting:0,
      done:0,
      dismiss:0
    },
    {
      user: "Anna",
      backlog: 5,
      nexsprint: 0,
      sprint: 5,
      todo:8,
      doing:7,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
    {
      user: "Carlos",
      backlog: 5,
      nexsprint: 8,
      sprint: 2,
      todo:1,
      doing:8,
      blockedortesting:3,
      done:0,
      dismiss:0
    },
    {
      user: "Hector",
      backlog: 5,
      nexsprint: 7,
      sprint: 3,
      todo:1,
      doing:8,
      blockedortesting:2,
      done:0,
      dismiss:0
    },
  ];
 
  const dataFetch = 'https://api.trello.com/1/boards/mxCDI6M3/cards';
  const memberFetch = 'https://api.trello.com/1/boards/mxCDI6M3/members';
  const labelFetch = 'https://api.trello.com/1/boards/mxCDI6M3/labels';
  
class MultipleBarChart extends React.Component {
  constructor(props){
  super(props)
		this.state = {
			dataTrello: [],
			dataUsers: [],
			dataLabels: []
		}
		this.labels = [];
		this.users = [];
		this.cards = [];

    this.getData();
  }


  getData() {
		let self = this
		fetch(dataFetch)
			.then((resp) => {
				return resp.json()
			}).then(data => {
				self.cards = data
				return fetch(memberFetch)
			}).then(resp => {
				return resp.json()
			}).then(data => {
				self.members = data
				return fetch(labelFetch)
			}).then(resp => {
				return resp.json()
			}).then(data => {
				self.labels = data

				let users = _.map(self.members, (member) => {
					let v = {
						idMember: member.id,
						user: member.fullName,
						labels: []
					}

					_.forEach(self.labels, l => {
						v.labels[l.id] = 0
					})

					return v
				})

				users = _.keyBy(users, 'idMember')

				_.forEach(self.cards, card => {
					_.forEach(card.idMembers, idMember => {
						users[idMember].labels[card.idLabels]++
					})
				})

				_.forEach(users, u => {
					_.forEach(self.labels, l => {
						u[l.name.toLowerCase()] = u.labels[l.id]
					})
					delete u.idMember
					delete u.labels
				})

				users = _.values(users)

				this.setState({ dataUsers: users, dataLabels: data })

			})
	}

render(){
return (
    <Chart
    dataSource={dataUserCard}
	title={" "}
  >
    <CommonSeriesSettings
      argumentField={"user"}
      type={"bar"}
      hoverMode={"allArgumentPoints"}
    />

    <Series valueField={"backlog"} name={"Backlog"} />
    <Series valueField={"nexsprint"} name={"Nex Sprint"} />
    <Series valueField={"sprint"} name={"Sprint"} />
    <Series valueField={"todo"} name={"To do"} />
    <Series valueField={"doing"} name={"Doing"} />
    <Series valueField={"blockedortesting"} name={"Blocked or testing"} />
    <Series valueField={"done"} name={"Done"} />
    <Series valueField={"Dismiss"} name={"Dismiss"} />


  </Chart>
 );
 }
}

export default MultipleBarChart;
