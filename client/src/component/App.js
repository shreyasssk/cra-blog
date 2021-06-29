import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeApp from './home';
import ComposePage from './compose';
import PostDetails from './home/PostDetails';
import AdminDashboard from './admin/AdminDashboard';
import EditPost from './admin/EditPost';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={HomeApp} />
					<Route path="/posts/:id" component={PostDetails} />
					<Route path="/compose" component={ComposePage} />
					<Route exact path="/admin" component={AdminDashboard} />
					<Route path="/admin/edit-post" component={EditPost} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
