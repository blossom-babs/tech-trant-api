import { Request, Response, Application } from 'express';
import { Post, User } from "../models";

const create = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id)
  try {
    const data = new Post({
      title: req.body.title,
      description: req.body.description,
      author: user.username,
      photo: req.body.photo,
      categories: req.body.categories
    })
    const post = await data.save()
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

const PostRoute = (app:Application) =>{
  app.post('/api/v1/newPost/:id', create)
}

export default PostRoute