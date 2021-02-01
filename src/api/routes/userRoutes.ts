import express from 'express';
import UserRepo from '../../data/repositories/UserRepo';
import UserService from '../../domain/services/UserService';
import { UserController } from '../controllers/UserController';
import { Container } from 'typedi';

const userRouter = express.Router();

const userControllerInstance = Container.get(UserController);

userRouter.get('/:id', userControllerInstance.getUser.bind(userControllerInstance));

userRouter.post('/signup', userControllerInstance.signUpUser.bind(userControllerInstance));

export default userRouter;
