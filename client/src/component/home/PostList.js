import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardFooter,
	Button,
} from 'shards-react';
import postsApi from '../api/fetchPost';

const PostList = () => {
	const [postsData, setPostsData] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const fetchedPosts = await postsApi.get('/posts');
			setPostsData(fetchedPosts.data);
		};
		getPosts();
	}, []);

	const dateFormater = (x) => {
		const date = new Date(x);
		return date.toDateString();
	};

	const showPosts = () => {
		return postsData.map((e) => {
			return (
				<Col key={e.id} lg="3" md="6" sm="12" className="mb-4">
					<Card>
						<CardImg src={e.link} />
						<CardBody>
							<CardTitle>{e.title}</CardTitle>
							<CardText>{e.desc.substring(0, 250)}</CardText>
							<Link
								className="btn btn-dark"
								to={{
									pathname: `/posts/${e.id}`,
									state: e,
								}}
							>
								Read more
							</Link>
						</CardBody>
						<CardFooter>
							Created on: {dateFormater(e.createdAt)}
						</CardFooter>
					</Card>
				</Col>
			);
		});
	};

	return (
		<div>
			{postsData.length !== 0 ? (
				<Row>{showPosts()}</Row>
			) : (
				<Card>
					<CardBody>No Posts Available!</CardBody>
				</Card>
			)}
		</div>
	);
};

export default PostList;
