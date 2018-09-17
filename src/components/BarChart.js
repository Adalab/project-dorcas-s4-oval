import React from 'react';
import Chart, {
	CommonSeriesSettings,
	Series
} from "devextreme-react/ui/chart";
import * as _ from 'lodash';


const dataLaberList = [
	{
		list: "Backlog",
		nourgente: 5,
		fueradesprint: 4,
		feature: 5,
		incidenciadeseguridadolegal:5,
		incidenciaobug:8,
		soporte:2,
		mantenimiento:0,
		epic:5,
		l:8,
		m:2,
		s:0,
		xl:8,
		xs:2,
		xxl:0,
		xxs:0,
		back:8,
		calculo:2,
		front:0
	},
	{
		list: "Next sprint",
		nourgente: 2,
		fueradesprint: 8,
		feature: 6,
		incidenciadeseguridadolegal:1,
		incidenciaobug:4,
		soporte:5,
		mantenimiento:0,
		epic:9,
		l:2,
		m:3,
		s:1,
		xl:4,
		xs:2,
		xxl:1,
		xxs:5,
		back:7,
		calculo:0,
		front:0
	},
	{
		list: "Sprint",
		nourgente: 5,
		fueradesprint: 4,
		feature: 5,
		incidenciadeseguridadolegal:1,
		incidenciaobug:6,
		soporte:5,
		mantenimiento:0,
		epic:6,
		l:3,
		m:1,
		s:4,
		xl:7,
		xs:5,
		xxl:0,
		xxs:1,
		back:2,
		calculo:2,
		front:0
	},
	{
		list: "To Do",
		nourgente: 4,
		fueradesprint: 3,
		feature: 5,
		incidenciadeseguridadolegal:1,
		incidenciaobug:5,
		soporte:4,
		mantenimiento:0,
		epic:3,
		l:5,
		m:1,
		s:0,
		xl:8,
		xs:2,
		xxl:0,
		xxs:0,
		back:4,
		calculo:4,
		front:0
	},
	{
		list: "Doint",
		nourgente: 5,
		fueradesprint: 4,
		feature: 4,
		incidenciadeseguridadolegal:3,
		incidenciaobug:5,
		soporte:1,
		mantenimiento:0,
		epic:7,
		l:5,
		m:2,
		s:0,
		xl:4,
		xs:2,
		xxl:0,
		xxs:0,
		back:4,
		calculo:2,
		front:0
	},
	{
		list: "Block or Testing",
		nourgente: 5,
		fueradesprint: 5,
		feature: 5,
		incidenciadeseguridadolegal:3,
		incidenciaobug:4,
		soporte:2,
		mantenimiento:0,
		epic:5,
		l:4,
		m:2,
		s:0,
		xl:2,
		xs:2,
		xxl:1,
		xxs:0,
		back:1,
		calculo:2,
		front:0
	},
	{
		list: "Done",
		nourgente: 5,
		fueradesprint: 4,
		feature: 3,
		incidenciadeseguridadolegal:8,
		incidenciaobug:6,
		soporte:2,
		mantenimiento:0,
		epic:3,
		l:4,
		m:2,
		s:0,
		xl:8,
		xs:2,
		xxl:1,
		xxs:0,
		back:8,
		calculo:2,
		front:0
	},
	{
		list: "Dismiss",
		nourgente: 5,
		fueradesprint: 4,
		feature: 2,
		incidenciadeseguridadolegal:6,
		incidenciaobug:4,
		soporte:2,
		mantenimiento:0,
		epic:1,
		l:4,
		m:2,
		s:0,
		xl:6,
		xs:2,
		xxl:0,
		xxs:0,
		back:8,
		calculo:2,
		front:0
	}
];
const dataFetch = 'https://api.trello.com/1/boards/mxCDI6M3/cards';
const memberFetch = 'https://api.trello.com/1/boards/mxCDI6M3/members';
const listFetch = 'https://api.trello.com/1/boards/mxCDI6M3/lists';

const dataUserCard = [

class BarChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  dataTrello: []
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
		  console.log(users)
		})
	  }
	
	  render() {
		return (
		  <div className="App">
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

				</div>
			);
		}
	}

	export default BarChart;
