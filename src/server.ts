import app from "./app";
import { connectDB, logger } from "./utils";
import dotenv from "dotenv";
dotenv.config();

const port = 8050 || process.env.PORT;

const start = async () => {
  await connectDB()
  app.listen(port, (): void => {
    logger.info(`Server running on port ${port}`);
  });
}

start()
