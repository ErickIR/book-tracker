import { Response } from 'express';

export enum ResponseStatus {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL = 500,
}

export default class ApiResponse {
  constructor(
    protected statusCode: ResponseStatus,
    protected message: string,
    protected data: any
  ) {}

  public static SuccessResponse<T>(message: string, data: T): ApiResponse {
    return new ApiResponse(ResponseStatus.SUCCESS, message, data);
  }

  public static FailureResponse<T extends Error>(
    message: string,
    statusCode: ResponseStatus,
    error: Error | any
  ): ApiResponse {
    return new ApiResponse(statusCode, message, error);
  }
}
