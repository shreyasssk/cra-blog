import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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

import NavBar from '../Navbar';
import fetchPost from '../api/fetchPost';

const EditPost = () => {
	const [formImage, setFormImage] = useState('');
	const [formTitle, setFormTitle] = useState('');
	const [formDesc, setFormDesc] = useState('');
	const [formMarkdown, setFormMarkdown] = useState('');
	const location = useLocation();
	const history = useHistory();
	const x = location.state;

	useEffect(() => {
		setFormImage(x.link);
		setFormTitle(x.title);
		setFormDesc(x.desc);
		setFormMarkdown(x.markdown);
	}, [x]);

	const onFormSubmit = async (e) => {
		history.push('/admin');
		var payload = {
			link: formImage,
			title: formTitle,
			desc: formDesc,
			markdown: formMarkdown,
		};

		try {
			const { data } = await fetchPost.post(
				`/posts/${x.id}/update`,
				payload
			);
			console.log('Post Updated!');
		} catch (err) {
			console.log('Unable to update post', err);
		}
	};

	return (
		<Container fluid>
			<NavBar />
			<br />
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron card jumbotron-fluid"
					>
						<h1 className="display-4">Edit Post</h1>
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

							<Button type="submit" size="sm" theme="dark">
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

						<img
							className="bg-img"
							src={formImage || x.link}
							alt=""
						/>
						<br />
						<br />
						<p>Created On: 2021-06-28</p>
						<h1>{formTitle || x.title}</h1>
						<p>{formDesc || x.desc}</p>
						<ReactMarkDown
							children={formMarkdown || x.markdown}
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

export default EditPost;
