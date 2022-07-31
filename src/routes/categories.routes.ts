import { Application } from 'express';
import { addCategory, getCategories } from '../controller/category.controller';

const CategoryRoute = (app: Application) => {
  app.get('/api/v1/category', getCategories)
  app.post('/api/v1/category', addCategory)
}

export default CategoryRoute