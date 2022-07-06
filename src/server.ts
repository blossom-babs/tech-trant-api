import app from "./app";
import connectDB from "./database/connection";
import dotenv from "dotenv";
dotenv.config();

const port = 8050 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL as string)
    if (process.env.NODE_ENV !== 'test') {
      app.listen(port, (): void => {
          console.log(`Server running on port ${port}`);
      });
  }
    // app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {

  }
}

start()
