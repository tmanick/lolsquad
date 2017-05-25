import React from 'react';
import Axios from 'axios';

import ChampionBucket from '../partials/ChampionBucket'

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
		const fetchUrl = `https://na1.api.riotgames.com/lol/static-data/v3/champions/?champListData=all&dataById=true&api_key=${riotApi.key}`;

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
			<div className="content">
				{
					Object.keys(this.state.champions).map((key) => {
						return <ChampionBucket
								key={key}
								champKey={key}
								version={this.state.version}
								image={this.state.champions[key].image.full}
								name={this.state.champions[key].name}
								title={this.state.champions[key].title}

						/>
					})
				}
			</div>
		);
	}
}

export default ChampionList;