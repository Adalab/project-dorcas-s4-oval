import React from 'react';
import Chart, {
	CommonSeriesSettings,
	Series
} from "devextreme-react/ui/chart";
import * as _ from 'lodash';



const dataFetch = 'https://api.trello.com/1/boards/mxCDI6M3/cards';
const memberFetch = 'https://api.trello.com/1/boards/mxCDI6M3/members';
const listFetch = 'https://api.trello.com/1/boards/mxCDI6M3/lists';


class BarChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataTrello: [],
			dataUsers: "",
			dataList: ""
		}
		this.lists = [];
		this.users = [];
		this.cards = [];
	
		this.getData();
	  }
	
	  getData () {
		let self = this
		fetch(dataFetch)
		.then( (resp) => {
		  return resp.json()
		}).then (data => {
		  self.cards = data
		  return fetch(memberFetch)
		}).then (resp => {
		  return resp.json()
		}).then(data => {
		  self.members = data
		  return fetch(listFetch)
		}).then(resp => {
		  return resp.json()
		}).then(data => {
			self.lists = data
			this.setState({dataLists: data})

		  let users = _.map(self.members, (member) => {
			let v = {
			  idMember: member.id,
			  user: member.fullName,
			  listas: []
			}
	
			_.forEach(self.lists, l => {
			  v.listas[l.id] = 0
			})
	
			return v
		  })
	
		  users = _.keyBy(users, 'idMember')
	
		  _.forEach(self.cards, card => {
			_.forEach(card.idMembers, idMember => {
			  users[idMember].listas[card.idList]++
			})
		  })
	
		  _.forEach(users, u => {
			_.forEach(self.lists, l => {
			  u[l.name.toLowerCase()] = u.listas[l.id]
			})
			delete u.idMember
			delete u.listas
		  })
	
			users = _.values(users)
			this.setState({dataUsers: users })
		})
	  }
	
	  render() {
		return (
		  <div className="App">
			  <Chart
		dataSource={this.state.dataUsers}
		title={" "}
	  >
		<CommonSeriesSettings
		  argumentField={"user"}
		  type={"bar"}
		  hoverMode={"allArgumentPoints"}
		/>
			
			<Series valueField={"backlog"} name={"Backlog"} />
			
	  </Chart>

				</div>
			);
		}
	}

	export default BarChart;
