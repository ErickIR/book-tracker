import User from '../../domain/models/User';
import UserModel, { UserDocument } from '../models/User';
import { Service } from 'typedi';

@Service()
export default class UserRepo {
  public async findById(id: string): Promise<UserDocument | null> {
    return await UserModel.findOne({ _id: id, status: true });
  }

  public async create(user: User): Promise<UserDocument> {
    const createdUser = await UserModel.create(user);
    return createdUser;
  }

  public async findByEmail(email: string): Promise<UserDocument | null> {
    return await UserModel.findOne({ email: email, status: true });
  }
}
