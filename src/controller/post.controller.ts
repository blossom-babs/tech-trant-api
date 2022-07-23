import { Request, Response } from 'express';
import { PostModel } from '../models';

// get all posts
const getPostsHandler = async (req: Request, res: Response) => {
	let posts;
	try {
		const category = req.query.category;
		if (category) {
			posts = await PostModel.find({ categories: { $in: [category] } });
		} else {
			posts = await PostModel.find();
		}
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json(error);
	}
};

// get single post
const getPostHandler = async (req: Request, res: Response) => {
	try {
		const post = await PostModel.findOne({ _id: req.params.postId });
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};

export { getPostsHandler, getPostHandler };
