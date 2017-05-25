import React from 'react';
import Axios from 'axios';

import { riotApi } from '../../riot'

class ChampionList extends React.Component {
	constructor() {
		super();

		this.performChampionFetch = this.performChampionFetch.bind(this);

		this.state = {
			champion: {},
			image: {},
			passive: {},
			spellq: {},
			spellw: {},
			spelle: {},
			spellr: {}
		}
	}

	componentDidMount() {
		this.performChampionFetch();
	}

	performChampionFetch() {
		// TODO: Trim this so it is only pulling relevant data
		const fetchUrl = `https://na1.api.riotgames.com/lol/static-data/v3/champions/${this.props.match.params.championId}?champData=all&api_key=${riotApi.key}`

		Axios
			.get(fetchUrl)
			.then(response => {
				this.setState({
					champion: response.data,
					image: response.data.image,
					passive: response.data.passive,
					spellq: response.data.spells[0],
					spellw: response.data.spells[1],
					spelle: response.data.spells[2],
					spellr: response.data.spells[3]
				});
				console.log(this.state.passive.image.full); // Remove this eventually
			})
			.catch(error => {
				console.log('Error fetching and parsing data.', error);
			});
	}

	render() {
		return (
			<div className="content">
				<h1>
					{this.state.champion.name}
					<br/><span className="small">{this.state.champion.title}</span>
				</h1>
				<img src={`http://ddragon.leagueoflegends.com/cdn/7.10.1/img/champion/${this.state.image.full}`} alt={this.state.champion.name} />
				<h2>Spells</h2>
				<table className="table">
					<thead>
						<tr>
							<td>Default Key</td>
							<td>Name</td>
							<td>Icon</td>
							<td>Description</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Passive</td>
							<td>{this.state.passive.name}</td>
							{/*
							<td><img src={`http://ddragon.leagueoflegends.com/cdn/7.10.1/img/passive/${this.state.passive.image.full}`} alt={this.state.passive.name} /></td>
							*/}
							<td>{this.state.passive.description}</td>
						</tr>
						
					</tbody>
				</table>
			</div>
		);
	}
}

export default ChampionList;