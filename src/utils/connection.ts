import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
	const URL = process.env.MONGO_URL as string;
	try {
		await mongoose.connect(URL);
		console.log('Connected to DB');
	} catch (error) {
		console.error(error);
	}
};

export default connectDB;
