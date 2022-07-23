import app from './app';
import connectDB from './database/connection';
import dotenv from 'dotenv';
dotenv.config();

const port = 8050 || process.env.PORT;

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
