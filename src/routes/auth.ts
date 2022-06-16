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
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const AuthRoute = (app: Application) => {
  app.post('/api/v1/register', register)
}

export default AuthRoute