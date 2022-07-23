import { Request, Response, Application } from 'express';
import { UserModel } from '../models';

const registerUser = async (req: Request, res: Response) => {
	try {
		const data = new UserModel({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		});
		const user = await data.save();
		const { password, ...info } = user._doc;
		res.status(200).json(info);
	} catch (error) {
		res.status(500).json(error);
	}
};

export { registerUser };
