import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import Home from './components/Layout/Home';
import Admin from './components/Layout/Admin';
import Champion from './components/Layout/Champion';
import ChampionList from './components/Layout/ChampionList';
import NotFound from './components/Layout/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Match exactly pattern="/admin" component={Admin} />
				<Match exactly pattern="/champion" component={ChampionList} />
				<Match exactly pattern="/champion/:championId" component={Champion} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));