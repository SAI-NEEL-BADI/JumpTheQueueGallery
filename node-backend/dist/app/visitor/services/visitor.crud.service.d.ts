import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { LoginDTO } from '../../core/auth/model/login.dto';
import { Visitor } from '../model/entities/visitor.entity';
export declare class VisitorCrudService extends TypeOrmCrudService<Visitor> {
    constructor(repo: Repository<Visitor>);
    findVisitor(username: string): Promise<Visitor | undefined>;
    login(user: LoginDTO): Promise<Visitor>;
    validateVisitor(username: string, pass: string): Promise<Visitor | undefined>;
    registerVisitor(visitor: Visitor): Promise<Visitor>;
}
