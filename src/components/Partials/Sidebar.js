import React from 'react';

class Sidebar extends React.Component {
	render() {

		return (
			<ul className="nav">
				<li>
					<a href="/champion/">Champion List</a>
				</li>
				<li>
					<a href="/item/">Item List</a>
				</li>
			</ul>
		);
	}
}

export default Sidebar;