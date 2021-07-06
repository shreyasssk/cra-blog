import { useState } from 'react';
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

const ComposePage = () => {
	const [formImage, setFormImage] = useState('');
	const [formTitle, setFormTitle] = useState('');
	const [formDesc, setFormDesc] = useState('');
	const [formMarkdown, setFormMarkdown] = useState('');

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
						<Form>
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
		</Container>
	);
};

export default ComposePage;
