import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RouteConfig from '../config/routeConfig';
import DashboardLayout from '../components/DashboardLayout';
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
			{RouteConfig.map((route, i) => (
			<RouteWithSubRoutes key={i} {...route} />
			))}
			<Route component={PageNotFound} />
		</Switch>
		</DashboardLayout>
	</Router>
);

export default App;