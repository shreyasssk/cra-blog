import React from 'react';
import { Container, Col, Row, Card } from 'shards-react';

import NavBar from '../Navbar';
import PostList from './PostList';
import PostDetails from './PostDetails';

const HomeApp = () => {
	return (
		<Container fluid className="main-content-container px-4">
			<NavBar />
			<br />
			<PostList />
			<PostDetails />
		</Container>
	);
};

export default HomeApp;
