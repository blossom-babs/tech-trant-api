import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		description: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: false
		},
		categories: {
			type: Array,
			required: false
		}
	},
	{ timestamps: true }
);

const PostModel =  mongoose.model('Post', PostSchema);
export default PostModel
