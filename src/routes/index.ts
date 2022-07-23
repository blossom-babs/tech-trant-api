import { Application } from "express";
import AuthRoute from "./auth.routes";
import UploadRouter from "./fileUpload";
import PostRoute from "./post.routes";
import UserRoute from "./user";

const IndexRoute = (app: Application) => {
  AuthRoute(app)
  UserRoute(app)
  PostRoute(app)
  UploadRouter(app)
}

export default IndexRoute