import { Application } from 'express';
import {
	registerUser,
	removeUser,
	login,
	getUsers,
	updateUser
} from '../controller/user.controller';

const UserRoute = (app: Application) => {
	// user routes
	app.post('/api/v1/register', registerUser);
	app.post('/api/v1/login', login);
	app.get('/api/v1/users/', getUsers);
	app.delete('/api/v1/users/:id', removeUser);
	app.put('/api/v1/users/:id', updateUser);
};

export default UserRoute;
