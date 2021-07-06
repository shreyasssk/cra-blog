import React from 'react';
import { Container, Row, Col } from 'shards-react';

const PostDetails = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col className="col-lg mb-4">
						<div
							style={{ backgroundColor: '#f8f8ff' }}
							className="jumbotron jumbotron-fluid"
						>
							<img
								style={{ maxWidth: '100%', height: 'auto' }}
								className="img-fluid rounded img-thumbnail"
								src=""
								alt=""
							/>
							<br />
							<br />
							<p>Created On: 2021-06-28</p>
							<h1>Title of the Post</h1>
							<p>Description of the Post</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PostDetails;
