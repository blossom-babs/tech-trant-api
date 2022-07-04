import { Application } from "express";
import AuthRoute from "./auth";
import UserRoute from "./user";

const IndexRoute = (app: Application) => {
  AuthRoute(app)
  UserRoute(app)
}

export default IndexRoute