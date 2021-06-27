const express = require('express');
const Comment = require('../models/comments');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const comments = await Comment.find().sort({
			createdAt: 'desc',
		});
		res.status(201).send(comments);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const comments = await Comment.find({ postId: id }).sort({
			createdAt: 'desc',
		});
		res.status(201).send(comments);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post('/:id', async (req, res) => {
	const { id } = req.params;
	const { content } = req.body;
	const comment = new Comment({
		postId: id,
		content,
	});
	try {
		const newComment = await comment.save();
		res.status(201).send('Comment created!');
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

router.post('/:id/update', async (req, res) => {
	const { id } = req.params;

	if (!req.body) {
		res.status(400).send({ message: 'Please enter a valid data!' });
	}

	Comment.findByIdAndUpdate({ _id: id }, req.body, { new: true })
		.then((data) => {
			if (!data) {
				return res.status(400).send('Comment not found');
			}
			res.status(200).send('Comment updated');
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

router.post('/:id/delete', async (req, res) => {
	const { id } = req.params;
	try {
		const removedComment = await Comment.findByIdAndDelete({ _id: id });
		res.status(200).send('Comment deleted successfully!');
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

module.exports = router;
