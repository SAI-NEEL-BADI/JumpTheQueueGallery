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
exports.VisitorCrudController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const serializer_1 = require("@devon4node/common/serializer");
const visitor_entity_1 = require("../model/entities/visitor.entity");
const visitor_crud_service_1 = require("../services/visitor.crud.service");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("../../core/auth/model/login.dto");
let VisitorCrudController = class VisitorCrudController {
    constructor(service) {
        this.service = service;
    }
    async login(login) {
        const token = await this.service.login(login);
        return token;
    }
    async register(visitor) {
        const token = await this.service.registerVisitor(visitor);
        return token;
    }
};
__decorate([
    common_1.Post('login'),
    openapi.ApiResponse({ status: 201, type: require("../model/entities/visitor.entity").Visitor }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], VisitorCrudController.prototype, "login", null);
__decorate([
    common_1.Post('register'),
    openapi.ApiResponse({ status: 201, type: require("../model/entities/visitor.entity").Visitor }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [visitor_entity_1.Visitor]),
    __metadata("design:returntype", Promise)
], VisitorCrudController.prototype, "register", null);
VisitorCrudController = __decorate([
    crud_1.Crud({
        model: {
            type: visitor_entity_1.Visitor,
        },
    }),
    swagger_1.ApiTags('visitor'),
    serializer_1.CrudType(visitor_entity_1.Visitor),
    common_1.Controller('visitor/visitors'),
    __metadata("design:paramtypes", [visitor_crud_service_1.VisitorCrudService])
], VisitorCrudController);
exports.VisitorCrudController = VisitorCrudController;
//# sourceMappingURL=visitor.crud.controller.js.map