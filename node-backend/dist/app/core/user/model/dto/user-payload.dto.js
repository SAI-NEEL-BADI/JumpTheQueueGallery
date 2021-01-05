"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPayload = void 0;
const openapi = require("@nestjs/swagger");
class UserPayload {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, username: { required: true, type: () => String }, role: { required: true, type: () => Number } };
    }
}
exports.UserPayload = UserPayload;
//# sourceMappingURL=user-payload.dto.js.map