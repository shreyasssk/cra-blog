require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');

const connectToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log('Connected to DB');
	} catch (err) {
		console.log('DB Error: ', err);
	}
};
connectToDB();

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
	cors({
		origin: true,
		allowedHeaders: [
			'Allow-Origin-With-Credentials',
			'Content-Type',
			'Access-Control-Allow-Origin',
		],
		credentials: true,
	})
);
app.use(
	cookieSession({
		signed: false,
	})
);

app.use('/auth', require('./routes/auth'));
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comment'));

PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
