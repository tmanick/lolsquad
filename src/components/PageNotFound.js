import React from 'react';

import Header from './partials/Header'
import Sidebar from './partials/Sidebar'

class Home extends React.Component {
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
							404!
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;