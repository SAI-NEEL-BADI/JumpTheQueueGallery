import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertData1609777719762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `INSERT INTO Event (id,  
            eventName, location, description, logo, attentionTime, 
            startDate,endDate,visitorsCount) VALUES (1, 'SNACKS','Banglore','Biggest Food Fest', NULL, 50000, 
            '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`,
    );

    await queryRunner.query(
      `INSERT INTO Event (id, 
                eventName, location, description, logo, attentionTime, 
                startDate,endDate,visitorsCount) VALUES (2, 'CORONA','Banglore','Biggest Pandemic Moment', NULL, 10000, 
                '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`,
    );

    await queryRunner.query(
      `INSERT INTO Event (id, 
                eventName, location, description, logo, attentionTime, 
                startDate,endDate,visitorsCount) VALUES (3, 'GO FRESH','Banglore','Eat Well Stay Well', NULL, 25000, 
                '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`,
    );

    await queryRunner.query(
      `INSERT INTO Event (id, 
                eventName, location, description, logo, attentionTime, 
                startDate,endDate,visitorsCount) VALUES (4, 'HEALTHY','Banglore','Health is Wealth', NULL, 55000, 
                '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM VISITOR`);
    await queryRunner.query(`DELETE FROM EVENT`);
  }
}
