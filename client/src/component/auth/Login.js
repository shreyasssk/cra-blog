import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	FormInput,
	Alert,
} from 'shards-react';

import fetchPost from '../api/fetchPost';

const Login = ({ currentUser }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState('');

	if (currentUser !== null) {
		return <Redirect to="/" />;
	} else {
		console.log('I am not logged in');
	}

	const onLogin = async (e) => {
		console.log('Logging in..');
		e.preventDefault();

		const payload = {
			email,
			password,
		};
		console.log(payload);

		try {
			const response = await fetchPost.post('/auth/login', payload);
			window.location.href = '/';
			console.log('From response', response);
		} catch (err) {
			setErrors(err.response.data);
			console.log(err.response);
		}
	};

	return (
		<Container fluid className="main-content-container px-4">
			<br />
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron card jumbotron-fluid"
					>
						<h1 className="display-4">Login</h1>
					</div>
				</Col>
			</Row>
			<Row>
				<Col className="col-lg mb-4">
					<div
						style={{ backgroundColor: '#f8f8ff' }}
						className="jumbotron card jumbotron-fluid"
					>
						<Form onSubmit={onLogin}>
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
							<Button theme="dark">Login</Button>
							<br />
							<br />
							{errors.length > 0 && (
								<Alert theme="danger">{errors}</Alert>
							)}
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
