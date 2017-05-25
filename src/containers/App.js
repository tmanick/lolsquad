import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardLayout from '../components/DashboardLayout';
import Home from '../components/Home';
import Admin from '../components/admin/Admin';
import ChampionList from '../components/champion/ChampionList';
import Champion from '../components/champion/Champion';
import PageNotFound from '../components/PageNotFound';

const App = () => (
	<Router>
		<DashboardLayout>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/admin/" component={Admin}/>
				<Route path="/champion/" component={ChampionList}>
					<Route path="/test" component={Champion}/>
				</Route>
				<Route component={PageNotFound} />
			</Switch>
		</DashboardLayout>
	</Router>
);

export default App;