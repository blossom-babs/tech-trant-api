import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./logger";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
     logger.info('Connected to DB');
  }  catch (error) {
     console.log(error);
     process.exit(1)

  }
}

export default connectDB
