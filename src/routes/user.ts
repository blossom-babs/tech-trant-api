import UserModel from "../models/user.model";
import { Request, Response, Application } from "express";
import bcrypt from 'bcrypt'

const { PEPPER, SALT } = process.env

const update = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id) {
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password + PEPPER, Number(SALT))
      }
      const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(401).json({ Message: 'You are not authorized to perform this action' })
  }
}

const destroy = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id) {
    try {
      await UserModel.findByIdAndDelete(req.params.id)
      res.status(200).json({ Message: 'User has been deleted' })
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(401).json({ Message: 'You are not authorized to perform this action' })
  }
}

const find = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id })
    const { password, ...otherInfo } = user._doc
    res.status(200).json(otherInfo)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req: Request, res: Response) => {
  try {
    let users = []
    const usersObject = await UserModel.find({})
    for (let user of usersObject) {
      const { password, _id, ...info } = user._doc
      users.push(info)
    }
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

const UserRoute = (app: Application) => {
  app.get('/api/v1/users', index)
  app.put('/api/v1/update/:id', update)
  app.delete('/api/v1/delete/:id', destroy)
  app.get('/api/v1/find/:id', find)
}

export default UserRoute