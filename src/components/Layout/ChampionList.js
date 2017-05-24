import React from 'react';

import Header from './Includes/Header'
import Sidebar from './Includes/Sidebar'

import { riotApi } from '../../riot'

class ChampionList extends React.Component {
	constructor() {
		super();

		this.state = {
			champions: []
		}
	}

	componentDidMount() {
		this.performChampionsFetch();
	}

	performChampionsFetch() {
		const fetchUrl = riotApi.allChampsUrl + riotApi.key;

		fetch(fetchUrl)
		.then(response => response.json()).then(function(j){
			console.log(j.data);
			this.setState({
				champions : j.data
			})
		}).catch(function(err) {
			console.log(err);
		});
	}

	test() {
		console.log(riotApi);
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
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ChampionList;