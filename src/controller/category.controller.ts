import { Request, response, Response } from 'express';
import { CategoryModel } from '../models';


// return all the categories
const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find()
    res.status(200).json(categories)
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
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json(error)
  }
}

export { getCategories, addCategory }