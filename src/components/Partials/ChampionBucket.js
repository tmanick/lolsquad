import React from 'react';

class ChampionBucket extends React.Component {
	render() {
		return (
			<div className="champion-bucket col-xs-4 text-center">
				<a href={`/champion/${this.props.champKey}`}>
					<img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.version}/img/champion/${this.props.image}`} alt={this.props.name} />
					<h2>
						{this.props.name}
						<br/><span className="small">{this.props.title}</span>
					</h2>
				</a>
			</div>
		);
	}
}

export default ChampionBucket;