import app from "./server";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = 8050 || process.env.PORT;

let db = mongoose
  .connect(process.env.MONGO_URL as string)
  .then(async () => {
    // console.log("connected to the db");
    app.listen(port, () => `App listening on port ${port}`);
  })
  .catch((err: any) => {
    console.log(err);
  })

//db.close()
