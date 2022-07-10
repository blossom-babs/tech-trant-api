import { Response, Request, Express } from 'express';
import { createUserHandler } from './controller';

const routes = (app: Express) => {
  app.post('/api/v1/posts', createUserHandler)
}

export default routes