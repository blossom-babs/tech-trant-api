import { Request, Response, Application } from "express";
import AuthRoute from "./auth";

const IndexRoute = (app: Application) => {
  app.use(AuthRoute)
}

export default IndexRoute