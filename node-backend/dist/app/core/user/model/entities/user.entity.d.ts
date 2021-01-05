import { BaseEntity } from '../../../../shared/model/entities/base-entity.entity';
export declare class User extends BaseEntity {
    username: string;
    password: string;
    role: number;
}
