import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import { Post, User } from "./models";
import IndexRoute from "./routes";
const app: Application = express();

app.use(express.json())

IndexRoute(app)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Welcome to Tech Trant" });
});

app.post('/api/v1/posts', async (req: Request, res: Response) => {
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
    mongoose.connection.close();
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.get("*", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "You have accessed a route that does not exist." });
});

export default app;

