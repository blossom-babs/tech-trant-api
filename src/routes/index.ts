import { Application } from 'express';
import UploadRouter from './fileUpload';
import PostRoute from './post.routes';
import UserRoute from './user.routes';

const IndexRoute = (app: Application) => {
	UserRoute(app);
	PostRoute(app);
	UploadRouter(app);
};

export default IndexRoute;
