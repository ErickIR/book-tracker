import UserRepo from '../../data/repositories/UserRepo';
import User from '../models/User';
import { Inject, Service } from 'typedi';
import PasswordService from './PasswordService';

@Service()
export default class UserService {
  constructor(private _userRepo: UserRepo, private _passwordService: PasswordService) {}

  public async signUpUser(user: User): Promise<User> {
    const checkUserEmail = await this._userRepo.findByEmail(user.email);

    if (checkUserEmail) {
      console.log(checkUserEmail);
      throw new Error('Invalid user email.');
    }

    user.password = await this._passwordService.hashPassword(user.password);
    return await this._userRepo.create(user);
  }

  public async findUserById(id: string): Promise<User> {
    return await this._userRepo.findById(id);
  }
}
