import User from "../models/User";
import { Request, Response, Application } from "express";
import bcrypt from 'bcrypt'

const { PEPPER, SALT } = process.env

const update =async (req:Request, res:Response) => {
  
}

const UserRoute = (app: Application) => {
  app.post('/api/v1/register', register)
  app.post('/api/v1/login', login)
}

export default UserRoute