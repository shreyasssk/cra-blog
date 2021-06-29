import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'shards-react';
import ReactMarkDown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import NavBar from '../Navbar';

const PostDetails = (props) => {
	const location = useLocation();
	const postData = location.state;

	return (
		<div>
			<Container fluid>
				<NavBar />
				<Row>
					<Col className="col-lg mb-4">
						<div
							style={{ backgroundColor: '#f8f8ff' }}
							className="jumbotron jumbotron-fluid"
						>
							<img
								style={{ maxWidth: '100%', height: 'auto' }}
								className="img-fluid rounded img-thumbnail"
								src={postData.link}
								alt=""
							/>
							<br />
							<br />
							<p>Created On: 2021-06-28</p>
							<h1>{postData.title}</h1>
							<p>{postData.desc}</p>
							<ReactMarkDown
								children={postData.markdown}
								components={Component}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const Component = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || '');
		return !inline && match ? (
			<SyntaxHighlighter
				style={a11yDark}
				language={match[1]}
				PreTag="div"
				children={String(children).replace(/\n$/, '')}
				{...props}
			/>
		) : (
			<code className={className} {...props} />
		);
	},
};

export default PostDetails;
