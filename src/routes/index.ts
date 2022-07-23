import { Application } from "express";
import { registerUser } from "../controller";
import AuthRoute from "./auth.routes";
import UploadRouter from "./fileUpload";
import PostRoute from "./post.routes";
import UserRoute from "./user";

const IndexRoute = (app: Application) => {
  // authentication routes
  app.post('/api/v1/register', registerUser)

  AuthRoute(app)
  UserRoute(app)
  PostRoute(app)
  UploadRouter(app)
}

export default IndexRoute