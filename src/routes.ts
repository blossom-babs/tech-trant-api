import { Response, Request, Express } from 'express';
import { createUserHandler } from './controller';
import { validateResource } from './middleware';

const routes = (app: Express) => {
  app.post('/api/v1/users', createUserHandler)

  app.get('/api/v1/test', (req: Request, res: Response) => {
    res.send('Test route up and running')
  })
}

export default routes