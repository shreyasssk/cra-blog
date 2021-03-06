import { Link } from 'react-router-dom';
import fetchPost from './api/fetchPost';

const NavBar = ({ currentUser }) => {
	console.log('From Nav', currentUser);

	const setLogout = (e) => {
		window.location.reload();
		const logoutUser = async () => {
			const { data } = await fetchPost.post('/auth/signout');
		};
		logoutUser();
	};

	const notLoggedIn = () => {
		if (currentUser == null) {
			return (
				<ul className="navbar-nav">
					<Link to="/">
						<li className="nav-item nav-link">Home</li>
					</Link>
					<Link to="/login">
						<li className="nav-item nav-link">Login</li>
					</Link>
					<Link to="/register">
						<li className="nav-item nav-link">Register</li>
					</Link>
				</ul>
			);
		}
	};

	const loggedIn = () => {
		if (currentUser !== null) {
			return (
				<ul className="navbar-nav">
					<Link to="/">
						<li className="nav-item nav-link">Home</li>
					</Link>
					<Link to="/compose">
						<li className="nav-item nav-link">Compose</li>
					</Link>
					<Link to="/admin">
						<li className="nav-item nav-link">Admin</li>
					</Link>
					<Link onClick={setLogout}>
						<li className="btn btn-danger">Logout</li>
					</Link>
					<li className="nav-item nav-link">
						User: {currentUser.name}
					</li>
				</ul>
			);
		}
	};

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light sticky-top"
			style={{ backgroundColor: '#e3f2fd' }}
		>
			<a className="navbar-brand">BLOG WEBSITE</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				{notLoggedIn()}
				{loggedIn()}
			</div>
		</nav>
	);
};

export default NavBar;
