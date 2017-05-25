import React from 'react';
import Axios from 'axios';

import { riotApi } from '../../riot'

class ChampionList extends React.Component {
	constructor() {
		super();

		this.performChampionFetch = this.performChampionFetch.bind(this);

		this.state = {
			version: {},
			champions: {}
		}
	}

	componentDidMount() {
		//this.performChampionFetch();
	}

	performChampionFetch() {
		const fetchUrl = `https://na1.api.riotgames.com/lol/static-data/v3/champions/${this.params.championId}?champListData=all&dataById=true&api_key=${riotApi.key}`;

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
		console.log(this.props);
		return (
			<div className="content">
				Single
			</div>
		);
	}
}

export default ChampionList;