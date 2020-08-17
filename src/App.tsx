import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { JobProvider } from './hooks/job';

const App: React.FC = () => (
	<BrowserRouter>
		<JobProvider>
			<Routes />
		</JobProvider>
		<GlobalStyle />
	</BrowserRouter>
);

export default App;
