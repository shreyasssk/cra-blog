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

import NavBar from '../Navbar';

const ComposePage = () => {
	return (
		<Container fluid className="main-content-container px-4">
			<NavBar />
			<br />
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: 'rgb(255,250,250)' }}
						className="jumbotron card jumbotron-fluid"
					>
						<h1 className="display-4">Compose Post</h1>
					</div>
				</Col>
			</Row>
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: 'rgb(255,250,250)' }}
						className="jumbotron card jumbotron-fluid"
					>
						<Form>
							<FormGroup>
								<label htmlFor="#title">Title :</label>
								<FormInput id="#title" placeholder="Title" />
							</FormGroup>
							<FormGroup>
								<label htmlFor="#content">Content :</label>
								<FormInput
									id="#content"
									placeholder="Content"
								/>
							</FormGroup>
							<div>
								<p className="mb-2">Markdown :</p>
								<FormTextarea size="lg" />
							</div>
							<br />
							<Button theme="dark">Submit</Button>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ComposePage;
