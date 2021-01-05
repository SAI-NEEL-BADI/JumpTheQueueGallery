"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1609774605222 = void 0;
class CreateTables1609774605222 {
    constructor() {
        this.name = 'CreateTables1609774605222';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "visitor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), 
          "name" varchar(255), "username" varchar(255), "password" varchar(255), "phoneNumber" varchar(255), "acceptedCommercials" boolean, "acceptedTerms" boolean, "userType" boolean)`);
        await queryRunner.query(`CREATE TABLE "event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                "eventName" VARCHAR(255), "location" VARCHAR(255), "description" VARCHAR(255), "logo" VARCHAR(255), "attentionTime" INTEGER,"visitorsCount" INTEGER,
                "startDate" DATETIME,"endDate" DATETIME );`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "visitor"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }
}
exports.CreateTables1609774605222 = CreateTables1609774605222;
//# sourceMappingURL=1609774605222-CreateTables.js.map