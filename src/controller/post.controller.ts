import { Request, Response } from 'express';
import { UserModel, PostModel } from '../models';

// create post
const createPost = async (req: Request, res: Response) => {
	const user = await UserModel.findById(req.body.userId);
	const category = req.body.categories.split(',');
	console.log(req.body)
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
		console.log(error)
		res.status(500).json(error);
	}
};

// get all posts
const getPosts = async (req: Request, res: Response) => {
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
const getPost = async (req: Request, res: Response) => {
	try {
		const post = await PostModel.findOne({ _id: req.params.postId });
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};

// delete post
const deletePost = async (req: Request, res: Response) => {
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
const updatePost = async (req: Request, res: Response) => {
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


export { createPost, getPosts, getPost, deletePost, updatePost };
