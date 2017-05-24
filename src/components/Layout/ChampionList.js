import React from 'react';

import Header from './Includes/Header'
import Sidebar from './Includes/Sidebar'

import { riotApi } from '../../riot'

class ChampionList extends React.Component {

	showAllChamps() {
		const fetchUrl = riotApi.allChampsUrl + riotApi.key;

		fetch(fetchUrl, {
			method: 'get'
		}).then(response => response.json()).then(function(j){
			Object
				.keys(j.data)
				.map(key => console.log(j.data[key]));
		}).catch(function(err) {
			console.log(err);
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
						<div className="col-xs-9 content">
							{ this.showAllChamps() }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ChampionList;