import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';
export declare class Visitor extends BaseEntity {
    name?: string;
    username?: string;
    password?: string;
    phoneNumber?: string;
    acceptedCommercials?: boolean;
    acceptedTerms?: boolean;
    userType?: boolean;
}
