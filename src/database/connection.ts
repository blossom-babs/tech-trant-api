import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = (url: string) => {
  return mongoose.connect(url)
}

export default connectDB
