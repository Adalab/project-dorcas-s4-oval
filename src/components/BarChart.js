import React from 'react';
import Chart, {
	CommonSeriesSettings,
	Series,
	Legend,
	Tooltip
} from "devextreme-react/ui/chart";
import * as _ from 'lodash';
import Keys from '../keys/keys';


const dataFetch = `https://api.trello.com/1/boards/BqZWFU8v/cards?key=${Keys.trello.key}&token=${Keys.trello.token}`;
const memberFetch = `https://api.trello.com/1/boards/BqZWFU8v/members?key=${Keys.trello.key}&token=${Keys.trello.token}`;
const listFetch = `https://api.trello.com/1/boards/BqZWFU8v/lists?key=${Keys.trello.key}&token=${Keys.trello.token}`;

let dataList = [];
let teste = [];

class BarChart extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			dataTrello: [],
			dataUsers: null,
			dataList: []
		}

		this.lists = [];
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

				this.setState({ dataUsers: users, dataList: data })

			})
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

		     if (typeof object[i] === 'number') {
		        dataList.push(i)
		     }
		   }
		  }
		  dataList = [ ...new Set(dataList) ];
		  console.log(dataList);

		  for (const list of dataList) {
			  teste.push(`<Series valueField="${list}" name="${list}" />`);
		  }
		  console.log(teste);
	}

	render() {
		return (
			<React.Fragment>

				{this.state.dataUsers ?

					<Chart
						dataSource={this.state.dataUsers}
						title={" "}
					>
						<CommonSeriesSettings
							argumentField={"user"}
							type={"bar"}
							hoverMode={"allArgumentPoints"}
						/>

						{/* { dataList.map( list => <Series valueField={list} name={list} />) } */}

						{/* {teste.map( item => item )} */}

					<Series valueField="documentación" name="documentación" />
					<Series valueField="roles" name="roles" />
					<Series valueField="hitos" name="hitos" />
					<Series valueField="backlog" name="backlog" />
					<Series valueField="sprint backlog" name="sprint backlog" />
					<Series valueField="en progreso" name="en progreso" />
					<Series valueField="en aprobación/validación/pr" name="en aprobación/validación/pr" />
					<Series valueField="terminadas" name="terminadas" />
					<Series valueField="bloqueadas" name="bloqueadas" />
					<Series valueField="sprints" name="sprints" />

						<Legend
							verticalAlignment={"top"}
							horizontalAlignment={"right"}
						/>

						<Tooltip
		          enabled={true}
		          shared={true}
						/>

					</Chart>
				: null
				}
			</React.Fragment>
		)}
}

export default BarChart;
