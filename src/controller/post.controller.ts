import { Request, Response } from 'express';
import { Post } from '../models';

// get all posts
const getPostHandler = async (req: Request, res: Response) => {
	let posts;
	try {
		const category = req.query.category;
		if (category) {
			posts = await Post.find({ categories: { $in: [category] } });
		} else {
			posts = await Post.find();
		}
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json(error);
	}
};

export { getPostHandler };
