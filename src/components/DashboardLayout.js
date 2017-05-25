import React from 'react';
import PropTypes from 'prop-types';

import Header from './partials/Header'
import Sidebar from './partials/Sidebar'

class DashboardLayout extends React.Component {
	render() {
		return (
			<div className="pageWrapper">
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-xs-3">
							<Sidebar />
						</div>
						<div className="col-xs-9">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

DashboardLayout.propTypes = {
	children: PropTypes.node
};

DashboardLayout.defaultProps = {
	children: {}
};

export default DashboardLayout;