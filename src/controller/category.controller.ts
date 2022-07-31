import { Request, response, Response } from 'express';
import { CategoryModel } from '../models';

// return all the categories
const getCategories = async (req: Request, res: Response) => {
  try {
    let data = []
    const categories = await CategoryModel.find()
    for (let item of categories) {
      const { name } = item._doc
      data.push(name)
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

// add a new category
const addCategory = async (req: Request, res: Response) => {
  try {
    const data = new CategoryModel({
      name: req.body.category
    })
    const category = await data.save()
    const { name } = category._doc
    res.status(200).json(name)
  } catch (error) {
    res.status(500).json(error)
  }
}

export { getCategories, addCategory }