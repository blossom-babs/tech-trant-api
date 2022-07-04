import User from "../models/User";
import { Request, Response, Application } from "express";
import bcrypt from 'bcrypt'

const { PEPPER, SALT } = process.env

const register = async (req: Request, res: Response) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password + PEPPER, Number(SALT))
    const data = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPwd
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
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(400).json({ Message: 'Email not found' })
    }

    const match = await bcrypt.compare(req.body.password + PEPPER, user.password)
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