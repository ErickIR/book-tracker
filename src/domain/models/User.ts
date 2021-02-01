import BaseEntity from './BaseEntity';
import Role from './Role';

export default interface User extends BaseEntity {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: Array<string>;
}
