import express, { Request, Response, Application } from "express";
import routes from "./routes";
import IndexRoute from "./routes";
const app = express();

app.use(express.json())

IndexRoute(app)
routes(app)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Welcome to Tech Trant" });
});

app.get("/api/v1/p", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Welcome to Tech Trant" });
});

app.post("/api/v1/p", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Welcome to Tech Trant" });
});


app.get("*", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "You have accessed a route that does not exist." });
});

export default app;

