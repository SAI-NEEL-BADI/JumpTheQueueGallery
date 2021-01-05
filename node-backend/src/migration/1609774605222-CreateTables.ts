import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1609774605222 implements MigrationInterface {
  name = 'CreateTables1609774605222';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "visitor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), 
          "name" varchar(255), "username" varchar(255), "password" varchar(255), "phoneNumber" varchar(255), "acceptedCommercials" boolean, "acceptedTerms" boolean, "userType" boolean)`,
    );
    await queryRunner.query(
      `CREATE TABLE "event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                "eventName" VARCHAR(255), "location" VARCHAR(255), "description" VARCHAR(255), "logo" VARCHAR(255), "attentionTime" INTEGER,"visitorsCount" INTEGER,
                "startDate" DATETIME,"endDate" DATETIME );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "visitor"`);
    await queryRunner.query(`DROP TABLE "event"`);
  }
}
