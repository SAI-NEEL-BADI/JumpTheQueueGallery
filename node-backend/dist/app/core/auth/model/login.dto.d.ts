import { User } from '../../user/model/entities/user.entity';
export declare class LoginDTO implements Pick<User, 'username' | 'password'> {
    username: string;
    password: string;
}
