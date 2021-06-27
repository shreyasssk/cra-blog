import React from 'react';
import {
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

const PostList = () => {
	return (
		<div>
			<h1>Home</h1>
			<Row>
				<Col lg="3" md="6" sm="12" className="mb-4">
					<Card>
						<CardBody>
							<CardTitle>Card Title</CardTitle>
							<CardSubtitle>Author: Deepa</CardSubtitle>
							<CardText>Card Text</CardText>
							<Button theme="dark">Read more</Button>
						</CardBody>
						<CardFooter>Created at: 20-05-2021</CardFooter>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default PostList;
