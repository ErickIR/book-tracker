import { Service } from 'typedi';
import { hash, compare } from 'bcrypt';

@Service()
export default class PasswordService {
  constructor(private saltRounds = 10) {}

  public async hashPassword(password: string): Promise<string> {
    try {
      return await hash(password, 10);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
