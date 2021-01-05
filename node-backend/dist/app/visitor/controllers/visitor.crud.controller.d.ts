import { Visitor } from '../model/entities/visitor.entity';
import { VisitorCrudService } from '../services/visitor.crud.service';
import { LoginDTO } from '../../core/auth/model/login.dto';
export declare class VisitorCrudController {
    service: VisitorCrudService;
    constructor(service: VisitorCrudService);
    login(login: LoginDTO): Promise<Visitor>;
    register(visitor: Visitor): Promise<Visitor>;
}
