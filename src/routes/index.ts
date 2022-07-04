import { Application } from "express";
import AuthRoute from "./auth";
import PostRoute from "./post";
import UserRoute from "./user";
const IndexRoute = (app: Application) => {
  AuthRoute(app)
  UserRoute(app)
  PostRoute(app)
}

export default IndexRoute