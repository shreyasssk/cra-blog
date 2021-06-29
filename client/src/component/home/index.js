import React, { useState } from 'react';
import { Container } from 'shards-react';

import NavBar from '../Navbar';
import PostList from './PostList';

const HomeApp = (props) => {
	// return (
	// 	<Container fluid className="main-content-container px-4">
	// 		<NavBar />
	// 		<br />
	// 		<h1>Home</h1>
	// 		<div className="container-fluid"></div>
	// 		<Row>
	// 			<Col md="9">
	// 				<PostDetails postDetails={postData} />
	// 			</Col>
	// 			<Col md="3">
	// 				<PostList onPostSelect={onPostSelect} />
	// 			</Col>
	// 		</Row>
	// 	</Container>
	// );
	return (
		<Container fluid className="main-content-container px-4">
			<NavBar />
			<br />
			<h1>Home</h1>
			<PostList />
		</Container>
	);
};

export default HomeApp;
