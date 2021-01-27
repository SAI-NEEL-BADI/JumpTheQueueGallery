import { hash, genSalt } from 'bcrypt';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertData1610037648045 implements MigrationInterface {
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

    await queryRunner.query(
      `INSERT INTO Visitor (id, username, name, password, phoneNumber, acceptedCommercials,
        acceptedTerms, userType) VALUES(?, ?, ?, ?, ?, ?, ?, ?);`,
      [1, 'sakshi@gmail.com', 'sakshi', await hash('S@kshi123', await genSalt(12)), '987654321', true, true, true],
    );

    await queryRunner.query(
      `INSERT INTO Visitor (id, username, name, password, phoneNumber, acceptedCommercials,
        acceptedTerms, userType) VALUES(?, ?, ?, ?, ?, ?, ?, ?);`,
      [2, 'sai@gmail.com', 'sai', await hash('S@ineel123', await genSalt(12)), '987654321', true, true, true],
    );

    await queryRunner.query(
      `INSERT INTO QUEUEDETAILS (id,
            queueNumber, creationTime, startTime, endTime,
            idVisitor, idEvent, estimatedTime, attentionTime)
            VALUES (1, 'Q101', '2021-02-03 00:01:22', '2021-03-12 00:01:00', '2021-03-12 00:01:44', 1, 1, '2021-01-01 00:01:30', '2021-01-01 00:01:00');`,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM VISITOR`);
    await queryRunner.query(`DELETE FROM EVENT`);
    await queryRunner.query(`DELETE FROM QUEUEDETAILS`);
  }
}
