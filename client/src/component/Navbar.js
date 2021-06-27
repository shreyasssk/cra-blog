import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light sticky-top"
			style={{ backgroundColor: '#e3f2fd' }}
		>
			<a className="navbar-brand">
				{window.location.pathname.toLocaleUpperCase().split('/')}
			</a>
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
				<ul className="navbar-nav">
					<Link to="/">
						<li className="nav-item nav-link">Home</li>
					</Link>
					<Link to="/about">
						<li className="nav-item nav-link">About</li>
					</Link>
					<Link to="/compose">
						<li className="nav-item nav-link">Compose</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
