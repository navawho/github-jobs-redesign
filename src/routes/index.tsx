import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DisplayJob from '../pages/DisplayJob';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/job" component={DisplayJob} />
	</Switch>
);

export default Routes;
