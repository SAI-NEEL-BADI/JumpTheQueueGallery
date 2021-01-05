"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertData1609777719762 = void 0;
class InsertData1609777719762 {
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO Event (id,  
            eventName, location, description, logo, attentionTime, 
            startDate,endDate,visitorsCount) VALUES (1, 'SNACKS','Banglore','Biggest Food Fest', NULL, 50000, 
            '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`);
        await queryRunner.query(`INSERT INTO Event (id, 
                eventName, location, description, logo, attentionTime, 
                startDate,endDate,visitorsCount) VALUES (2, 'CORONA','Banglore','Biggest Pandemic Moment', NULL, 10000, 
                '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`);
        await queryRunner.query(`INSERT INTO Event (id, 
                eventName, location, description, logo, attentionTime, 
                startDate,endDate,visitorsCount) VALUES (3, 'GO FRESH','Banglore','Eat Well Stay Well', NULL, 25000, 
                '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`);
        await queryRunner.query(`INSERT INTO Event (id, 
                eventName, location, description, logo, attentionTime, 
                startDate,endDate,visitorsCount) VALUES (4, 'HEALTHY','Banglore','Health is Wealth', NULL, 55000, 
                '2021-01-01 00:01:00','2021-02-01 00:01:00',0);`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM VISITOR`);
        await queryRunner.query(`DELETE FROM EVENT`);
    }
}
exports.InsertData1609777719762 = InsertData1609777719762;
//# sourceMappingURL=1609777719762-InsertData.js.map