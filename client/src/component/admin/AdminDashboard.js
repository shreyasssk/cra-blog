import React from 'react';
import './dashboard.css';
import { Container, Row, Col, Card, Button } from 'shards-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<Card>
						<div style={{ overflowX: 'auto' }}>
							<div className="table-responsive">
								<table className="table table-fixed">
									<thead className="thead-dark">
										<tr>
											<th scope="col" className="col-3">
												60e46207bd8d522520b7910b
											</th>
											<th scope="col" className="col-3">
												Title
											</th>
											<th scope="col" className="col-3">
												Desc
											</th>
											<th scope="col" className="col-3">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th className="col-3">
												60e46207bd8d522520b7910b
											</th>
											<td className="col-3">
												Title of the Blog
											</td>
											<td className="col-3">
												Description of the Blog Post!
											</td>
											<td className="col-3">
												<Link className="mr-1 btn btn-primary btn-sm">
													Edit
												</Link>
												<Button
													theme="danger"
													size="sm"
												>
													Delete
												</Button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default AdminDashboard;
