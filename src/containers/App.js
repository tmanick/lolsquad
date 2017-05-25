import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardLayout from '../components/DashboardLayout';
import Home from '../components/Home';
import Admin from '../components/admin/Admin';
import ChampionList from '../components/champion/ChampionList';
import Champion from '../components/champion/Champion';
import PageNotFound from '../components/PageNotFound';

const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		exact={route.exact}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
);

const App = () => (
	<Router>
		<DashboardLayout>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/admin/" component={Admin}/>
				<Route exact path="/champion/" component={ChampionList}/>
				<Route exact path="/champion/:championId" component={Champion}/>
				<Route component={PageNotFound} />
			</Switch>
		</DashboardLayout>
	</Router>
);

export default App;