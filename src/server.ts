import app from './app';
import dotenv from 'dotenv';
import connectDB from './utils/connection';
dotenv.config();

const port = process.env.PORT || 8050;

const start = async () => {
	try {
		await connectDB();
		app.listen(port, (): void => {
			console.log(`Server running on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
