import React from 'react';

import Header from './Includes/Header'
import Sidebar from './Includes/Sidebar'

import riotApi from '../../riot'

class Admin extends React.Component {

	generateChampionList(e) {
		e.preventDefault();

		const apiUrl = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?champListData=all&dataById=true&api_key=' + riotApi.key;

		fetch(apiUrl, {
			method: 'get'
		}).then(function(response) {
			return response.json();
		}).then(function(j){
			for (var key in j.data) {
				console.log(j.data[key].name);
			}
		}).catch(function(err) {
			// Error :(
		});
	}

	render() {
		return (
			<div className="pageWrapper home">
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-xs-3">
							<Sidebar />
						</div>
						<div className="col-xs-9">
							<button className="btn" onClick={(e) => this.generateChampionList(e)}>Generate Champion List</button>
							<br/>
							<br/>
							<button className="btn" onClick={(e) => this.generateItemList(e)}>Generate Item List</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Admin;