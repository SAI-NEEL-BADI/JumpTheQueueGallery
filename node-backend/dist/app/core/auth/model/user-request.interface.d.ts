import { Request } from 'express';
interface IUserRequest extends Request {
    user: any;
}
export declare type UserRequest = IUserRequest;
export {};
