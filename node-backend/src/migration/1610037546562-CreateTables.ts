import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1610037546562 implements MigrationInterface {
  name = 'CreateTables1610037546562';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "username" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "role" integer NOT NULL DEFAULT (0))`,
    );
    await queryRunner.query(
      `CREATE TABLE "event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "eventName" varchar, "location" varchar, "description" varchar, "logo" varchar, "attentionTime" integer, "visitorsCount" integer, "startDate" datetime, "endDate" datetime)`,
    );
    await queryRunner.query(
      `CREATE TABLE "visitor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar(255), "username" varchar(255), "password" varchar(255), "phoneNumber" varchar, "acceptedCommercials" boolean, "acceptedTerms" boolean, "userType" boolean)`,
    );
    await queryRunner.query(
      `CREATE TABLE "queuedetails" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueNumber" varchar, "creationTime" datetime, "startTime" datetime, "endTime" datetime, "estimatedTime" datetime, "attentionTime" datetime, "idVisitor" integer, "idEvent" integer)`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_queuedetails" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueNumber" varchar, "creationTime" datetime, "startTime" datetime, "endTime" datetime, "estimatedTime" datetime, "attentionTime" datetime, "idVisitor" integer, "idEvent" integer, CONSTRAINT "FK_2d4d3be8d5606795d4c4b3c60f8" FOREIGN KEY ("idVisitor") REFERENCES "visitor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_36f674556875dcd994bcae6cbd0" FOREIGN KEY ("idEvent") REFERENCES "event" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_queuedetails"("id", "version", "createdAt", "updatedAt", "queueNumber", "creationTime", "startTime", "endTime", "estimatedTime", "attentionTime", "idVisitor", "idEvent") SELECT "id", "version", "createdAt", "updatedAt", "queueNumber", "creationTime", "startTime", "endTime", "estimatedTime", "attentionTime", "idVisitor", "idEvent" FROM "queuedetails"`,
    );
    await queryRunner.query(`DROP TABLE "queuedetails"`);
    await queryRunner.query(`ALTER TABLE "temporary_queuedetails" RENAME TO "queuedetails"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "queuedetails" RENAME TO "temporary_queuedetails"`);
    await queryRunner.query(
      `CREATE TABLE "queuedetails" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueNumber" varchar, "creationTime" datetime, "startTime" datetime, "endTime" datetime, "estimatedTime" datetime, "attentionTime" datetime, "idVisitor" integer, "idEvent" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "queuedetails"("id", "version", "createdAt", "updatedAt", "queueNumber", "creationTime", "startTime", "endTime", "estimatedTime", "attentionTime", "idVisitor", "idEvent") SELECT "id", "version", "createdAt", "updatedAt", "queueNumber", "creationTime", "startTime", "endTime", "estimatedTime", "attentionTime", "idVisitor", "idEvent" FROM "temporary_queuedetails"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_queuedetails"`);
    await queryRunner.query(`DROP TABLE "queuedetails"`);
    await queryRunner.query(`DROP TABLE "visitor"`);
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
