const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Validation
const { userValidation } = require('../components/validation');

router.post('/register', async (req, res) => {
	const { name, email, password } = req.body;
	// Validate input
	const { error } = userValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if user is already registered to the database
	const emailExist = await User.findOne({ email });
	if (emailExist) return res.status(400).send('Email already in use!');

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = new User({
		name,
		email,
		password: hashedPassword,
	});

	const userToken = jwt.sign(
		{
			id: user.id,
			email: user.email,
			name: user.name,
		},
		process.env.ACCESS_TOKEN_SECRET
	);

	req.session.jwt = userToken;
	try {
		const savedUser = await user.save();
		res.send({ user: user.id, email: user.email, name: user.name });
	} catch (err) {
		res.status(400).send(err);
	}
});

router.post('/login', async (req, res) => {
	const { name, email, password } = req.body;
	// Validate input
	const { error } = userValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if user is registered to the database
	const user = await User.findOne({ email });
	if (!user) return res.status(400).send('Email not registered');

	// Check if password is correct
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) return res.status(400).send('Invalid password');

	// Create and assign token
	const userToken = jwt.sign(
		{
			id: user.id,
			email: user.email,
			name: user.name,
		},
		process.env.ACCESS_TOKEN_SECRET
	);

	req.session.jwt = userToken;
	res.status(200).send({ user: user.id, email: user.email, name: user.name });
});

router.post('/signout', (req, res) => {
	req.session = null;
	res.send({});
});

router.get('/currentuser', (req, res) => {
	// checking to see if a session is created or a jwt session being stored by session-cookie
	if (!req.session || !req.session.jwt) {
		return res.send({ currentUser: null });
	}

	try {
		const payload = jwt.verify(
			req.session.jwt,
			process.env.ACCESS_TOKEN_SECRET
		);
		res.status(201).send({ currentUser: payload });
	} catch (err) {
		res.send({ currentUser: null });
	}
});

module.exports = router;
