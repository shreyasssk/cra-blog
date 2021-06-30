import React, { useState } from 'react';
import { Container } from 'shards-react';

import PostList from './PostList';

const HomeApp = ({ currentUser }) => {
	console.log(currentUser);
	return (
		<Container fluid className="main-content-container px-4">
			<br />
			<h1>Home</h1>
			<PostList />
		</Container>
	);
};

export default HomeApp;
