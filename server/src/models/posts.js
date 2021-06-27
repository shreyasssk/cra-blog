const mongoose = require('mongoose');
const marked = require('marked');
const createDomPurifier = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurifier(new JSDOM().window);

const postSchema = new mongoose.Schema(
	{
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
		sanitizedHtml: {
			type: String,
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

postSchema.pre('validate', function (next) {
	if (this.markdown) {
		this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
	}
	next();
});

module.exports = mongoose.model('Post', postSchema);
