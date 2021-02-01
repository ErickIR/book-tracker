import * as dotenv from 'dotenv';

dotenv.config();

export const environment: String = process.env.NODE_ENV;

export const port: String = process.env.PORT;

export const dbConnection = {
  user: process.env.MONGO_USER || '',
  password: process.env.MONGO_PWD || '',
  host: process.env.MONGO_HOST || '',
  port: process.env.MONGO_PORT || '',
  dbName: process.env.MONGO_DATABASE_NAME || '',
};
