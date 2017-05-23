import React from 'react';

import riotApi from '../../riot'

class GetAllChamps extends React.Component {

	generateChampionList(e) {
		e.preventDefault();
		console.log(riotApi.key);
		const apiCall = 'https://na1.api.riotgames.com/lol/platform/v3/champions?api_key='+riotApi.key;
		
		fetch('/api/championlist', {
			method: 'get'
		}).then(function(response) {

		}).catch(function(err) {
			// Error :(
		});
	}
	generateItemList(e) {

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

export default GetAllChamps;