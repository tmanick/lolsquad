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
			<div className="content">
				Single
			</div>
		);
	}
}

export default ChampionList;