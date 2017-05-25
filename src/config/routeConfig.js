import Home from '../components/Home';
import Admin from '../components/admin/Admin';
import ChampionList from '../components/champion/ChampionList';
import Champion from '../components/champion/Champion';

const RouteConfig = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/admin',
		exact: true,
		component: Admin,
	},
	{
		path: '/champion',
		exact: true,
		component: ChampionList,
	},
	{
		path: '/champion/:championId',
		exact: true,
		component: Champion,
	}
];

export default RouteConfig;
