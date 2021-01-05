import { Strategy } from 'passport-jwt';
import { ConfigService } from '@devon4node/config';
import { Config } from '../../../shared/model/config/config.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    readonly configService: ConfigService<Config>;
    constructor(configService: ConfigService<Config>);
    validate(payload: any): Promise<any>;
}
export {};
