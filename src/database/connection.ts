import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = (url) => {
  mongoose
    .connect(process.env.MONGO_URL as string)
    .then(async () => {
       console.log("connected to the db");
    })
    .catch((err: any) => {
      console.log(err);
    })
}

export default connectDB
