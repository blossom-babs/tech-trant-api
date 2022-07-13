import app from "./app";
import { connectDB, logger } from "./utils";
import config from 'config'

const port = config.get<number>('port')

const start = async () => {
  await connectDB()
  app.listen(port, (): void => {
    logger.info(`Server running on port ${port}`);
  });
}

start()
