import { Application } from "express";
import AuthRoute from "./auth";
import UploadRouter from "./fileUpload";
import PostRoute from "./post";
import UserRoute from "./user";

const IndexRoute = (app: Application) => {
  AuthRoute(app)
  UserRoute(app)
  PostRoute(app)
  UploadRouter(app)
}

export default IndexRoute