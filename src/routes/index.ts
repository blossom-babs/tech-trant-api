import { Application } from 'express';
import CategoryRoute from './categories.routes';
import UploadRouter from './fileUpload';
import PostRoute from './post.routes';
import UserRoute from './user.routes';

const IndexRoute = (app: Application) => {
	UserRoute(app);
	PostRoute(app);
	UploadRouter(app);
	CategoryRoute(app)
};

export default IndexRoute;
