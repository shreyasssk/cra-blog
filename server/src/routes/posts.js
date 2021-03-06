const router = require('express').Router();
const Posts = require('../models/posts');
const verify = require('../components/verifyToken');

router.get('/', async (req, res) => {
	try {
		const posts = await Posts.find().sort({ createdAt: 'desc' });
		res.status(201).send(posts);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post('/create/:id', verify, async (req, res) => {
	const { id } = req.params;
	const { title, desc, markdown, link } = req.body;
	const post = new Posts({
		userId: id,
		title,
		desc,
		markdown,
		link,
	});
	try {
		const newPost = await post.save();
		res.status(201).send(newPost);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const post = await Posts.findById(id);
		res.status(201).send(post);
	} catch (err) {
		res.status(500).send({ message: err });
	}
});

// Send posts uploaded by the specific user
// pass userId as parameter
router.get('/:id/currentuser', verify, async (req, res) => {
	const { id } = req.params;

	try {
		const post = await Posts.find({ userId: id });
		res.status(201).send(post);
	} catch (err) {
		res.status(500).send({ message: err });
	}
});

// router.put('/:id', async (req, res) => {
// 	const { id } = req.params;

// 	if (!req.body) {
// 		res.status(400).send({ message: 'Please enter a valid data!' });
// 	}

// 	Posts.findByIdAndUpdate({ _id: id }, req.body, { new: true })
// 		.then((data) => {
// 			if (!data) {
// 				return res.status(400).send('Post not found');
// 			}
// 			res.status(200).send('Post updated');
// 		})
// 		.catch((err) => {
// 			res.status(500).send({ message: err });
// 		});
// });

router.post('/:id/update', verify, async (req, res) => {
	const { id } = req.params;

	if (!req.body) {
		res.status(400).send({ message: 'Please enter a valid data!' });
	}

	Posts.findByIdAndUpdate({ _id: id }, req.body, { new: true })
		.then((data) => {
			if (!data) {
				return res.status(400).send('Post not found');
			}
			res.status(200).send('Post updated');
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

// router.delete('/:id', async (req, res) => {
// 	const { id } = req.params;
// 	try {
// 		const removedPost = await Posts.findByIdAndDelete(id);
// 		res.status(200).send('Post deleted successfully!');
// 	} catch (err) {
// 		res.status(400).send({ message: err.message });
// 	}
// });

router.post('/:id/delete', verify, async (req, res) => {
	const { id } = req.params;
	try {
		const removedPost = await Posts.findByIdAndDelete(id);
		res.status(200).send('Post deleted successfully!');
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

module.exports = router;
