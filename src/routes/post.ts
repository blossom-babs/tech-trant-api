import { Request, Response, Application } from 'express';
import { Post, User } from "../models";

// create post
const create = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id)
  const category = req.body.categories.split(',')
  try {
    const data = new Post({
      title: req.body.title,
      description: req.body.description,
      author: user.username,
      photo: req.body.photo,
      categories: category
    })
    const post = await data.save()
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

// delete post
const remove = async (req: Request, res: Response) => {
  if (req.params.id !== req.body.userId) {
    res.status(401).json({ Message: 'You are not authorized to perform this action' })
    return
  }
  try {
    await Post.findOneAndDelete({ title: req.body.title })
    res.status(200).json({ Message: 'Post deleted' })
  } catch (error) {
    res.status(500).json(error)
  }
}

// get all posts
const index = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
}

// get single post
const post = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOne({_id: req.params.postId})
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}



const PostRoute = (app: Application) => {
  app.post('/api/v1/newPost/:id', create)
  app.delete('/api/v1/removePost/:id', remove)
  app.get('/api/v1/posts', index)
  app.get('/api/v1/post/:postId', post)
}

export default PostRoute