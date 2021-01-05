"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const def = {
    isDev: true,
    host: 'localhost',
    port: 3000,
    clientUrl: 'localhost:4200',
    globalPrefix: 'v1',
    loggerConfig: {
        console: true,
        errorLogFile: './logs/error.log',
        generalLogFile: './logs/general.log',
        loggerLevel: 'info',
    },
    database: require('../../ormconfig.json'),
    swaggerConfig: {
        swaggerTitle: 'NestJS Application',
        swaggerDescription: 'API Documentation',
        swaggerVersion: '0.0.1',
    },
    jwtConfig: { secret: 'SECRET', signOptions: { expiresIn: '24h' } },
};
exports.default = def;
//# sourceMappingURL=default.js.map