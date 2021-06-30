import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
	Container,
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	FormInput,
	FormTextarea,
} from 'shards-react';
import ReactMarkDown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import fetchPost from '../api/fetchPost';

const ComposePage = ({ currentUser }) => {
	const [formImage, setFormImage] = useState('');
	const [formTitle, setFormTitle] = useState('');
	const [formDesc, setFormDesc] = useState('');
	const [formMarkdown, setFormMarkdown] = useState('');

	if (currentUser !== null) {
		console.log('I am logged in', currentUser);
	} else {
		return <Redirect to="/login" />;
	}

	const onFormSubmit = async (e) => {
		var data = {
			link: formImage,
			title: formTitle,
			desc: formDesc,
			markdown: formMarkdown,
		};

		try {
			const sentData = await fetchPost.post('/posts/create', data);
			console.log(sentData.data);
		} catch (err) {
			console.log('Unable to send post', err);
		}
		console.log(data);
	};

	return (
		<Container fluid className="main-content-container px-4">
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron card jumbotron-fluid"
					>
						<h1 className="display-4">Compose Post</h1>
					</div>
				</Col>
			</Row>
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron card jumbotron-fluid"
					>
						<Form onSubmit={onFormSubmit}>
							<FormGroup>
								<label htmlFor="#title">Link :</label>
								<FormInput
									id="#title"
									placeholder="Title"
									value={formImage}
									onChange={(e) =>
										setFormImage(e.target.value)
									}
								/>
							</FormGroup>
							<FormGroup>
								<label htmlFor="#title">Title :</label>
								<FormInput
									id="#title"
									placeholder="Title"
									value={formTitle}
									onChange={(e) =>
										setFormTitle(e.target.value)
									}
								/>
							</FormGroup>
							<FormGroup>
								<label>Content :</label>
								<FormTextarea
									size="lg"
									value={formDesc}
									onChange={(e) =>
										setFormDesc(e.target.value)
									}
								/>
							</FormGroup>
							<div>
								<p className="mb-2">Markdown :</p>
								<FormTextarea
									size="lg"
									value={formMarkdown}
									onChange={(e) =>
										setFormMarkdown(e.target.value)
									}
								/>
							</div>
							<br />
							<Button type="submit" theme="dark">
								Submit
							</Button>
						</Form>
					</div>
				</Col>
			</Row>
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron jumbotron-fluid"
					>
						<h1 className="display-4">Blog Preview</h1>
						<br />

						<img className="bg-img" src={formImage} alt="" />
						<br />
						<br />
						<p>Created On: 2021-06-28</p>
						<h1>{formTitle}</h1>
						<p>{formDesc}</p>
						<ReactMarkDown
							children={formMarkdown}
							components={Component}
						/>
					</div>
				</Col>
			</Row>
		</Container>
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

export default ComposePage;
