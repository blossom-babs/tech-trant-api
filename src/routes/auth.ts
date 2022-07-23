import User from "../models/user.model";
import { Request, Response, Application } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const data = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    const user = await data.save()
    const { password, ...info } = user._doc
    res.status(200).json(info)
  } catch (error) {
    res.status(500).json(error)
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res.status(400).json({ Message: 'Username not found' })
    }

    const match = await user.validatePassword(req.body.password)
    if (!match) {
      return res.status(400).json({ Message: 'Wrong password' })
    }

    const { password, ...info } = user._doc
    return res.status(200).json(info)

  } catch (error) {
    res.status(500).json(error)
  }
}

const AuthRoute = (app: Application) => {
  app.post('/api/v1/register', register)
  app.post('/api/v1/login', login)
}

export default AuthRoute