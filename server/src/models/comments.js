const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		postId: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},

	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			},
		},
	}
);

module.exports = mongoose.model('Comment', commentSchema);
