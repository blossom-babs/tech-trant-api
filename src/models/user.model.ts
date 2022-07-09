import mongoose, { CallbackError } from 'mongoose';
import bcrypt from 'bcrypt'
const { SALT, PEPPER } = process.env

export interface UserDocument extends mongoose.Document {
	username: string,
	email: string,
	password: string,
	createdAt: Date,
	updatedAt: Date
}

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	profilePic: {
		type: String,
		default: ''
	}
}, { timestamps: true });

UserSchema.pre('save', async function save(next) {
	let user = this as UserDocument;
	if (!user.isModified('password')) return next();
	try {
		user.password = await bcrypt.hash(user.password + PEPPER, Number(SALT));
		return next()
	} catch (error) {
		return next(error as undefined | CallbackError)
	}
});

UserSchema.methods.validatePassword = async function validatePassword(data: string) {
	return bcrypt.compare(data + PEPPER, this.password);
};

const UserModel = mongoose.model("User", UserSchema)
export default UserModel
