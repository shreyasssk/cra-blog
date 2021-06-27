import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import HomeApp from './home';
import ComposePage from './compose';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={HomeApp} />
					<Route path="/about" />
					<Route path="/compose" component={ComposePage} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
