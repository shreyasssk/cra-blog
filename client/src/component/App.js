import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeApp from './home';
import ComposePage from './compose';
import AdminDashboard from './admin/AdminDashboard';
import Register from './auth/Register';
import Login from './auth/Login';
import NavBar from './Navbar';

const App = () => {
	return (
		<div>
			<Router>
				<div className="container-fluid">
					<NavBar />
				</div>
				<br />
				<Switch>
					<Route exact path="/">
						<HomeApp />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/compose">
						<ComposePage />
					</Route>
					<Route exact path="/admin">
						<AdminDashboard />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
