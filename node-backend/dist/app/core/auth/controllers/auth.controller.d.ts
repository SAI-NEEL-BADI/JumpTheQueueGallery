import { Response as eResponse } from 'express';
import { User } from '../../user/model/entities/user.entity';
import { AuthService } from '../services/auth.service';
import { LoginDTO } from '../model/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(login: LoginDTO, res: eResponse): Promise<void>;
    register(user: User): Promise<User>;
    currentUser(user: User): User;
}
