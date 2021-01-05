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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../model/entities/user.entity");
const bcrypt_1 = require("bcrypt");
const typeorm_2 = require("@nestjs/typeorm");
const roles_enum_1 = require("../../auth/model/roles.enum");
const class_transformer_1 = require("class-transformer");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findOne(username) {
        return this.userRepository.findOne({
            where: {
                username,
            },
        });
    }
    async registerUser(user) {
        const actualUser = await this.findOne(user.username);
        if (actualUser) {
            throw new Error('User already exists');
        }
        const salt = await bcrypt_1.genSalt(12);
        const hashPass = await bcrypt_1.hash(user.password, salt);
        return class_transformer_1.plainToClass(user_entity_1.User, await this.userRepository.save({
            username: user.username,
            password: hashPass,
            role: roles_enum_1.roles.USER,
        }));
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map