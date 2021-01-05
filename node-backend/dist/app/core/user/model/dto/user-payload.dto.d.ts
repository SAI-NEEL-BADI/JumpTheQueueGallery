import { User } from '../entities/user.entity';
export declare class UserPayload implements Pick<User, 'id' | 'username' | 'role'> {
    id: number;
    username: string;
    role: number;
}
