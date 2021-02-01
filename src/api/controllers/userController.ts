import express, { Request, Response } from 'express';
import UserService from '../../domain/services/UserService';
import { Inject, Service } from 'typedi';

@Service()
export class UserController {
  constructor(private _userService: UserService) {
    this._userService = _userService;
  }

  public async getUser(req: Request, res: Response) {
    const id = req.params.id;

    const user = await this._userService.findUserById(id);
    console.log(user);
    res.status(200).json({
      data: user,
    });
  }

  public async signUpUser(req: Request, res: Response) {
    const user = req.body;
    try {
      const userCreated = await this._userService.signUpUser(user);
      res.status(201).json({
        data: userCreated,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
