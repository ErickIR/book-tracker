import { model, Schema, Document, Types } from 'mongoose';
import User from '../../domain/models/User';

export const DOCUMENT_NAME = 'User';
export const COLLECTION_NAME = 'Users';

export interface UserDocument extends User, Document {
  fullName: string;
  roles: Types.Array<string>;
}

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    select: false,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  roles: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    required: true,
    select: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    required: true,
    select: false,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: false,
    select: false,
  },
});

userSchema.virtual('fullName').get(function () {
  return this.firstName + this.lastName;
});

const UserModel = model<UserDocument>(DOCUMENT_NAME, userSchema, COLLECTION_NAME);

export default UserModel;
