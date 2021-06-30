import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
		'Allow-Origin-With-Credentials': '*',
		'Access-Control-Allow-Origin': '*',
	},
	withCredentials: true,
});
