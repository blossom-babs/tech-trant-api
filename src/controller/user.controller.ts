import { Request, Response } from 'express';
import { UserModel } from '../models';
import bcrypt from 'bcrypt';

const { PEPPER, SALT } = process.env;
// register
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

// login
const login = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findOne({ username: req.body.username });
		if (!user) {
			return res.status(400).json({ Message: 'Username not found' });
		}

		const match = await user.validatePassword(req.body.password);
		if (!match) {
			return res.status(400).json({ Message: 'Wrong password' });
		}

		const { password, ...info } = user._doc;
		return res.status(200).json(info);
	} catch (error) {
		res.status(500).json(error);
	}
};

// delete user
const removeUser = async (req: Request, res: Response) => {
	if (req.body.userId === req.params.id) {
		try {
			await UserModel.findByIdAndDelete(req.params.id);
			res.status(200).json({ Message: 'User has been deleted' });
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res
			.status(401)
			.json({ Message: 'You are not authorized to perform this action' });
	}
};

// find all user
const getUsers = async (req: Request, res: Response) => {
	try {
		let users = [];
		const usersObject = await UserModel.find({});
		for (let user of usersObject) {
			const { password, _id, ...info } = user._doc;
			users.push(info);
		}
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
};

// update user info
const updateUser = async (req: Request, res: Response) => {
	if (req.body.userId === req.params.id) {
		try {
			if (req.body.password) {
				req.body.password = await bcrypt.hash(
					req.body.password + PEPPER,
					Number(SALT)
				);
			}
			const updatedUser = await UserModel.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res
			.status(401)
			.json({ Message: 'You are not authorized to perform this action' });
	}
};

export { registerUser, removeUser, login, getUsers, updateUser };
