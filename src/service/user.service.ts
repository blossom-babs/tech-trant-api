import UserModel, { UserDocument } from './../models/user.model';
import { DocumentDefinition } from "mongoose";

const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await UserModel.create(input)
  } catch (error: any) {
    throw new Error(error)
  }
}

export { createUser }