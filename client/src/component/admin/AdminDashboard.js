import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { Container, Row, Col, Card, CardBody, Button } from 'shards-react';
import { Link } from 'react-router-dom';

import fetchPost from '../api/fetchPost';

const AdminDashboard = ({ currentUser }) => {
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const { data } = await fetchPost.get('/posts');
			setPostData(data);
		};
		getPosts();
	}, [postData]);

	const deletePost = (e) => {
		const postId = e;
		const deletedPost = async () => {
			const { data } = await fetchPost.post(`/posts/${postId}/delete`);
			console.log('Post deleted!');
		};
		deletedPost();
	};

	const isLoggedIn = () => {
		return (
			<div
				style={{ backgroundColor: '#f8f8ff' }}
				className="jumbotron card jumbotron-fluid"
			>
				<h1 className="display-4">Oops...</h1>
				<h3>You have to be a registered user to access this page</h3>
				<Row>
					<Link
						to="/login"
						className="mr-1 btn btn-secondary btn-sm col-2"
					>
						Login
					</Link>
					<Link to="/register" className="btn btn-dark btn-sm col-2">
						Register
					</Link>
				</Row>
			</div>
		);
	};

	const getRowData = () => {
		return postData.map((i) => {
			return (
				<tr key={i.id}>
					<th className="col-3">{i.id}</th>
					<td className="col-3">{i.title}</td>
					<td className="col-3">{i.desc.substring(0, 250)}</td>
					<td className="col-3">
						<Link
							to={{
								pathname: '/admin/edit-post',
								state: i,
							}}
							className="mr-1 btn btn-primary btn-sm"
						>
							Edit
						</Link>
						<Button
							value={i.id}
							onClick={(e) => {
								deletePost(e.target.value);
							}}
							theme="danger"
							size="sm"
						>
							Delete
						</Button>
					</td>
				</tr>
			);
		});
	};

	const adminPage = () => {
		return (
			<Container fluid>
				<Row>
					<Col>
						{postData.length !== 0 ? (
							<Card>
								<div style={{ overflowX: 'auto' }}>
									<div className="table-responsive">
										<table className="table table-fixed">
											<thead className="thead-dark">
												<tr>
													<th
														scope="col"
														className="col-3"
													>
														ID
													</th>
													<th
														scope="col"
														className="col-3"
													>
														Title
													</th>
													<th
														scope="col"
														className="col-3"
													>
														Desc
													</th>
													<th
														scope="col"
														className="col-3"
													>
														Action
													</th>
												</tr>
											</thead>
											<tbody>{getRowData()}</tbody>
										</table>
									</div>
								</div>
							</Card>
						) : (
							<Card>
								<CardBody>No Posts Available!</CardBody>
							</Card>
						)}
					</Col>
				</Row>
			</Container>
		);
	};

	const shouldRender = () => {
		if (currentUser === null) {
			return isLoggedIn();
		}
		return adminPage();
	};

	return shouldRender();
};

export default AdminDashboard;
