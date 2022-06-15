import express, { Request, Response, Application } from "express";
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express();
const port = 8050;

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "Welcome to Tech Trant Brrrr" });
});

app.get("*", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "You have accessed a route that does not exist." });
});

app.listen(port);
