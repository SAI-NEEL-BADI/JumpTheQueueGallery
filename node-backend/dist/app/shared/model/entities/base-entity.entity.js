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
exports.BaseEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number } };
    }
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.VersionColumn({ default: 1 }),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    swagger_1.ApiHideProperty(),
    __metadata("design:type", Number)
], BaseEntity.prototype, "version", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], BaseEntity.prototype, "updatedAt", void 0);
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base-entity.entity.js.map