import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import IndexRoute from "./routes";
dotenv.config();

const app: Application = express();
const port = 8050;
app.use(express.json())
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("connected to the db");
  })
  .catch((err) => {
    console.log(err);
  });

IndexRoute(app)
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Welcome to Tech Trant" });
});

app.get("*", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "You have accessed a route that does not exist." });
});

app.listen(port);
