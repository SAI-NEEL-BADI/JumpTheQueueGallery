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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visitor = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_entity_1 = require("../../../shared/model/entities/base-entity.entity");
let Visitor = class Visitor extends base_entity_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String, maxLength: 255 }, username: { required: false, type: () => String, maxLength: 255 }, password: { required: false, type: () => String, maxLength: 255 }, phoneNumber: { required: false, type: () => String }, acceptedCommercials: { required: false, type: () => Boolean }, acceptedTerms: { required: false, type: () => Boolean }, userType: { required: false, type: () => Boolean } };
    }
};
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], Visitor.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], Visitor.prototype, "username", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], Visitor.prototype, "password", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Visitor.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('boolean', { nullable: true }),
    __metadata("design:type", Boolean)
], Visitor.prototype, "acceptedCommercials", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('boolean', { nullable: true }),
    __metadata("design:type", Boolean)
], Visitor.prototype, "acceptedTerms", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('boolean', { nullable: true }),
    __metadata("design:type", Boolean)
], Visitor.prototype, "userType", void 0);
Visitor = __decorate([
    typeorm_1.Entity()
], Visitor);
exports.Visitor = Visitor;
//# sourceMappingURL=visitor.entity.js.map