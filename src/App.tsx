import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Help from './components/Help';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { JobProvider } from './hooks/jobContext';

const App: React.FC = () => (
	<BrowserRouter>
		<JobProvider>
			<Routes />
		</JobProvider>
		<GlobalStyle />
		<Help />
	</BrowserRouter>
);

export default App;
