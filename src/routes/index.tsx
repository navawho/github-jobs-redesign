import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DisplayJob from '../pages/DisplayJob';
import HowItWorks from '../pages/HowItWorks';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/job" component={DisplayJob} />
		<Route path="/how-it-works" component={HowItWorks} />
	</Switch>
);

export default Routes;
