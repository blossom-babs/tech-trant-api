import express, { Request, Response, Application } from 'express';
import IndexRoute from './routes';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(express.json());

IndexRoute(app);

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ Message: 'Welcome to Tech Trant' });
});

app.get('*', (req: Request, res: Response) => {
	res
		.status(200)
		.json({ Message: 'You have accessed a route that does not exist.' });
});

export default app;
