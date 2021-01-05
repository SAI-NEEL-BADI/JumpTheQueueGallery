import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Event } from '../model/entities/event.entity';
export declare class EventCrudService extends TypeOrmCrudService<Event> {
    constructor(repo: Repository<Event>);
}
