import { Request, Response, Application } from "express";
import AuthRoute from "./auth";

const IndexRoute = (app: Application) => {
  AuthRoute(app)
}

export default IndexRoute