import express, { Request, Response } from 'express';
import UserService from '../../domain/services/UserService';
import { Inject, Service } from 'typedi';
import ApiResponse, { ResponseStatus } from '../responses/ApiResponse';

@Service()
export class UserController {
  constructor(private _userService: UserService) {
    this._userService = _userService;
  }

  public async getUser(req: Request, res: Response) {
    const id = req.params.id;

    const user = await this._userService.findUserById(id);
    res.status(ResponseStatus.SUCCESS).json(ApiResponse.SuccessResponse('User Found!', user));
  }

  public async signUpUser(req: Request, res: Response) {
    const user = req.body;
    try {
      const userCreated = await this._userService.signUpUser(user);
      res
        .status(ResponseStatus.CREATED)
        .json(ApiResponse.SuccessResponse('Sucessfull sign up!', userCreated));
    } catch (error) {
      res
        .status(ResponseStatus.BAD_REQUEST)
        .json(ApiResponse.FailureResponse(error.message, ResponseStatus.BAD_REQUEST, error));
    }
  }
}
