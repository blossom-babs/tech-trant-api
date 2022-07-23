import { Request, Response, Application } from 'express';
import mongoose from 'mongoose';
import { PostModel, UserModel } from '../models';
import app from '../app';
import { getPostHandler, getPostsHandler } from '../controller/post.controller';

// create post
const create = async (req: Request, res: Response) => {
	const user = await UserModel.findById(req.body.userId);
	const category = req.body.categories.split(',');
	try {
		const data = new PostModel({
			title: req.body.title,
			description: req.body.description,
			author: user.username,
			photo: req.body.photo,
			categories: category
		});
		const post = await data.save();
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};

// delete post
const remove = async (req: Request, res: Response) => {
	const post = await PostModel.findOne({ _id: req.params.postId });
	if (post.author !== req.body.author) {
		res
			.status(401)
			.json({ Message: 'You are not authorized to perform this action' });
		return;
	}
	try {
		await post.delete();
		res.status(200).json({ Message: 'Post deleted' });
	} catch (error) {
		res.status(500).json(error);
	}
};


// update post
const update = async (req: Request, res: Response) => {
	const post = await PostModel.findOne({ _id: req.params.postId });
	if (post.author !== req.body.author) {
		res
			.status(401)
			.json({ Message: 'You are not authorized to perform this action' });
		return;
	}
	try {
		req.body.categories = req.body.categories.split(',');
		const updatedPost = await PostModel.findByIdAndUpdate(
			req.params.postId,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedPost);
	} catch (error) {
		res.status(500).json(error);
	}
};

const PostRoute = (app: Application) => {
	app.get('/api/v1/posts', getPostsHandler);
	app.get('/api/v1/post/:postId', getPostHandler);
	app.post('/api/v1/posts', create);
	app.delete('/api/v1/post/:postId', remove);
	app.put('/api/v1/post/:postId', update);
};

export default PostRoute;
