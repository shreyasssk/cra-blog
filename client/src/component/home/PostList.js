import React from 'react';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	CardFooter,
} from 'shards-react';

const PostList = () => {
	return (
		<div>
			<Row>
				<Col lg="3" md="6" sm="12" className="mb-4">
					<Card>
						<CardImg src="" />
						<CardBody>
							<CardTitle>Title of the Blog</CardTitle>
							<CardText>Description of the Blog Post!</CardText>
							<Link className="btn btn-dark">Read more</Link>
						</CardBody>
						<CardFooter>
							Created on: Created On: 2021-06-28
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default PostList;
