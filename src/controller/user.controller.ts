import { Response, Request } from 'express';
import { createUser } from '../service/';
import { logger } from '../utils';

const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body)
  } catch (error: any) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}

export { createUserHandler }