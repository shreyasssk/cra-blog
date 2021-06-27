import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardFooter,
	Button,
} from 'shards-react';

const PostDetails = () => {
	return (
		<div>
			<Container fluid>
				<div
					style={{ backgroundColor: 'rgb(255,250,250)' }}
					className="jumbotron card jumbotron-fluid"
				>
					<h1 className="display-4">Post Title</h1>
					<p>Post content</p>
				</div>
			</Container>
		</div>
	);
};

export default PostDetails;
