import { Request, Response, Application } from 'express';
import { Post, User } from "../models";

// create post
const create = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.userId)
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
  const post = await Post.findOne({ _id: req.params.postId })
  if (post.author !== req.body.author) {
    res.status(401).json({ Message: 'You are not authorized to perform this action' })
    return
  }
  try {
    await Post.findByIdAndDelete(req.params.postId)
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
    const post = await Post.findOne({ _id: req.params.postId })
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

// update post
const update = async (req: Request, res: Response) => {
  const post = await Post.findOne({ _id: req.params.postId })
  if (post.author !== req.body.author) {
    res.status(401).json({ Message: 'You are not authorized to perform this action' })
    return
  }
  try {
    req.body.categories = req.body.categories.split(',')
    const updatedPost = await Post.findByIdAndUpdate(req.params.postId, { $set: req.body },
      { new: true })
    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(500).json(error)
  }
}



const PostRoute = (app: Application) => {
  app.post('/api/v1/post/:userId', create)
  app.delete('/api/v1/post/:postId', remove)
  app.get('/api/v1/posts', index)
  app.get('/api/v1/post/:postId', post)
  app.put('/api/v1/post/:postId', update)
}

export default PostRoute