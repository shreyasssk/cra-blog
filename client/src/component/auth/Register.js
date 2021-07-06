import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	FormInput,
} from 'shards-react';

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onRegister = async (e) => {
		e.preventDefault();
		const payload = {
			name: username,
			email,
			password,
		};
		console.log(payload);
	};

	return (
		<Container fluid className="main-content-container px-4">
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron card jumbotron-fluid"
					>
						<h1 className="display-4">Register</h1>
					</div>
				</Col>
			</Row>
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron card jumbotron-fluid"
					>
						<Form onSubmit={onRegister}>
							<FormGroup>
								<label>Name</label>
								<FormInput
									id="#Name"
									placeholder="Name"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
							</FormGroup>
							<FormGroup>
								<label>Email</label>
								<FormInput
									id="#Email"
									placeholder="something@test.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormGroup>
							<FormGroup>
								<label>Password</label>
								<FormInput
									type="password"
									id="#Password"
									placeholder="Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</FormGroup>
							<Button theme="dark">Register</Button>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Register;
