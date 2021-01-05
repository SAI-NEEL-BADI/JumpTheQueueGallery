import { Repository } from 'typeorm';
import { User } from '../model/entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
    registerUser(user: User): Promise<User>;
}
