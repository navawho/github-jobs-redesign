import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DisplayJob from '../pages/DisplayJob';
import HowItWorks from '../pages/HowItWorks';
import APIDocs from '../pages/APIDocs';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/job" component={DisplayJob} />
		<Route path="/how-it-works" component={HowItWorks} />
		<Route path="/api-docs" component={APIDocs} />
	</Switch>
);

export default Routes;
