import express, { Request, Response, Application } from "express";
import routes from "./routes";
import IndexRoute from "./routes";
const app = express();

app.use(express.json())

routes(app)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Welcome to Tech Trant" });
});

app.get("*", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "You have accessed a route that does not exist." });
});

export default app;

