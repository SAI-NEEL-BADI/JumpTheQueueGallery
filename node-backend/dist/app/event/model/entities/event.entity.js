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
exports.Event = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_entity_1 = require("../../../shared/model/entities/base-entity.entity");
let Event = class Event extends base_entity_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { eventName: { required: false, type: () => String }, location: { required: false, type: () => String }, description: { required: false, type: () => String }, logo: { required: false, type: () => String }, attentionTime: { required: false, type: () => Number }, visitorsCount: { required: false, type: () => Number }, startDate: { required: false, type: () => Date }, endDate: { required: false, type: () => Date } };
    }
};
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "eventName", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "logo", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('integer', { nullable: true }),
    __metadata("design:type", Number)
], Event.prototype, "attentionTime", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('integer', { nullable: true }),
    __metadata("design:type", Number)
], Event.prototype, "visitorsCount", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('datetime', { nullable: true }),
    __metadata("design:type", Date)
], Event.prototype, "startDate", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('datetime', { nullable: true }),
    __metadata("design:type", Date)
], Event.prototype, "endDate", void 0);
Event = __decorate([
    typeorm_1.Entity()
], Event);
exports.Event = Event;
//# sourceMappingURL=event.entity.js.map