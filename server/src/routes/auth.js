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
	try {
		const savedUser = await user.save();
		res.send({ user: user.id, email: user.email });
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
	const token = jwt.sign(
		{ name: user.name, email: user.email },
		process.env.ACCESS_TOKEN_SECRET
	);
	res.header('auth-token', token).send(token);
});

module.exports = router;
