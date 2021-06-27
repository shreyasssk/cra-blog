require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
app.use(express.json());
app.use(cors());

app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comment'));

PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
