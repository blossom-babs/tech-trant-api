import User from "../models/User";
import { Request, Response, Application } from "express";

const register = async (req: Request, res: Response) => {
  try {
    const data = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    const user = await data.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

const AuthRoute = (app:Application) => {
  app.post('/api/v1/register', register)
}

export default AuthRoute