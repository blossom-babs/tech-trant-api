import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = () => {
	try {
		return mongoose
			.connect(process.env.MONGO_URL as string)
			.then(() => console.log('Server is connected to the db'));
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;
