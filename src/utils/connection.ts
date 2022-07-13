import mongoose from "mongoose";
import logger from "./logger";
import config from 'config'

const connectDB = async () => {
  const URL = config.get<string>('MONGO_URL')
  try {
    await mongoose.connect(URL);
    logger.info('Connected to DB');
  } catch (error) {
    logger.error(error);
    process.exit(1)

  }
}

export default connectDB
