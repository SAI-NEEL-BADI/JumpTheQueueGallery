import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';
export declare class Event extends BaseEntity {
    eventName?: string;
    location?: string;
    description?: string;
    logo?: string;
    attentionTime?: number;
    visitorsCount?: number;
    startDate?: Date;
    endDate?: Date;
}
