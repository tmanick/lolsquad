import React from 'react';

import Header from './Includes/Header'
import Sidebar from './Includes/Sidebar'

class Admin extends React.Component {

	generateChampionList(e) {
		e.preventDefault();

		fetch('/api/championlist', {
			method: 'get'
		}).then(function(response) {

		}).catch(function(err) {
			// Error :(
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

export default Admin;