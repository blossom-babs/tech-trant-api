import { Application } from 'express';
import {
	getPost,
	getPosts,
	createPost,
	deletePost,
	updatePost
} from '../controller/post.controller';

const PostRoute = (app: Application) => {
	app.get('/api/v1/posts', getPosts);
	app.get('/api/v1/post/:postId', getPost);
	app.post('/api/v1/posts', createPost);
	app.delete('/api/v1/post/:postId', deletePost);
	app.put('/api/v1/post/:postId', updatePost);
};

export default PostRoute;
