import React from 'react';
import Axios from 'axios';

import Header from './Includes/Header'
import Sidebar from './Includes/Sidebar'

import ChampionBucket from '../Partials/ChampionBucket'

import { riotApi } from '../../riot'

class ChampionList extends React.Component {
	constructor() {
		super();

		this.performChampionsFetch = this.performChampionsFetch.bind(this);

		this.state = {
			version: {},
			champions: {}
		}
	}

	componentDidMount() {
		this.performChampionsFetch();
	}

	performChampionsFetch() {
		const fetchUrl = riotApi.allChampsUrl + riotApi.key;

		Axios
			.get(fetchUrl)
			.then(response => {
				this.setState({
					champions: response.data.data,
					version: response.data.version
				});
				console.log(this.state.champions); // Remove this eventually
			})
			.catch(error => {
				console.log('Error fetching and parsing data.', error);
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
							{
								Object.keys(this.state.champions).map((key) => {
									return <ChampionBucket
											key={key}
											version={this.state.version}
											image={this.state.champions[key].image.full}
											name={this.state.champions[key].name}
											title={this.state.champions[key].title}

									/>
								})
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ChampionList;