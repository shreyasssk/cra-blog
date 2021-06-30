const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		link: {
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		markdown: {
			type: String,
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

module.exports = mongoose.model('Post', postSchema);
