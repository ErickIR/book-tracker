import mongoose from 'mongoose';
import { dbConnection } from '../config/config';

const dbURI = `mongodb://${dbConnection.host}:${dbConnection.port}/${dbConnection.dbName}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

console.log('Mongo DB Uri: ' + dbURI);

export default function () {
  mongoose
    .connect(dbURI, options)
    .then(() => {
      console.log('Mongoose connections done');
    })
    .catch((error) => {
      console.log('Mongoose connection error: ' + error.message);
    });
}
