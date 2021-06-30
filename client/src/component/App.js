import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeApp from './home';
import ComposePage from './compose';
import PostDetails from './home/PostDetails';
import AdminDashboard from './admin/AdminDashboard';
import EditPost from './admin/EditPost';
import Register from './auth/Register';
import Login from './auth/Login';
import NavBar from './Navbar';

import fetchPost from './api/fetchPost';

const App = (props) => {
	const [currentUser, setCurrentUser] = useState('');
	useEffect(() => {
		const getUser = async () => {
			const { data } = await fetchPost.get('/auth/currentuser', {
				headers: {
					'Content-Type': 'application/json',
					'Allow-Origin-With-Credentials': '*',
					'Access-Control-Allow-Origin': '*',
				},
				withCredentials: true,
			});
			setCurrentUser(data.currentUser);
		};
		getUser();
	}, []);

	return (
		<div>
			<Router>
				<div className="container-fluid">
					<NavBar currentUser={currentUser} />
				</div>
				<br />
				<Switch>
					<Route exact path="/">
						<HomeApp currentUser={currentUser} />
					</Route>
					<Route path="/register">
						<Register currentUser={currentUser} />
					</Route>
					<Route path="/login">
						<Login currentUser={currentUser} />
					</Route>
					<Route path="/posts/:id">
						<PostDetails currentUser={currentUser} />
					</Route>
					<Route path="/compose">
						<ComposePage currentUser={currentUser} />
					</Route>
					<Route exact path="/admin">
						<AdminDashboard currentUser={currentUser} />
					</Route>
					<Route path="/admin/edit-post">
						<EditPost currentUser={currentUser} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
