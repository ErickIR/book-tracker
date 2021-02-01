import BaseEntity from './BaseEntity';

export const enum RoleCode {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

export default interface Role extends BaseEntity {
  code: string;
}
