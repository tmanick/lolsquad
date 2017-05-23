import React from 'react';

import Header from './Includes/Header'
import Sidebar from './Includes/Sidebar'

class ChampionList extends React.Component {

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
							<a href="/champion/123">Aatrox</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ChampionList;