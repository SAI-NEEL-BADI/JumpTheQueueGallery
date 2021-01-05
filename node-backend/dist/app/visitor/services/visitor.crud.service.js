"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorCrudService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const bcrypt_1 = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("typeorm");
const visitor_entity_1 = require("../model/entities/visitor.entity");
let VisitorCrudService = class VisitorCrudService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
    async findVisitor(username) {
        return this.repo.findOne({
            where: {
                username,
            },
        });
    }
    async login(user) {
        const visitor = await this.validateVisitor(user.username, user.password);
        if (!visitor) {
            throw new common_1.UnauthorizedException('Wrong username or password');
        }
        return visitor;
    }
    async validateVisitor(username, pass) {
        const visitor = await this.findVisitor(username);
        if (visitor && (await bcrypt_1.compare(pass, visitor.password))) {
            return visitor;
        }
        return undefined;
    }
    async registerVisitor(visitor) {
        const actualUser = await this.findVisitor(visitor.username);
        if (actualUser) {
            throw new Error('User already exists');
        }
        const salt = await bcrypt_1.genSalt(12);
        const hashPass = await bcrypt_1.hash(visitor.password, salt);
        return class_transformer_1.plainToClass(visitor_entity_1.Visitor, await this.repo.save({
            name: visitor.name,
            username: visitor.username,
            password: hashPass,
            phoneNumber: visitor.phoneNumber,
            acceptedCommercials: visitor.acceptedCommercials,
            acceptedTerms: visitor.acceptedTerms,
            userType: visitor.userType,
        }));
    }
};
VisitorCrudService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(visitor_entity_1.Visitor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VisitorCrudService);
exports.VisitorCrudService = VisitorCrudService;
//# sourceMappingURL=visitor.crud.service.js.map