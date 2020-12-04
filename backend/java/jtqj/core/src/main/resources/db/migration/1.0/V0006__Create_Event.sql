create table Event( id BIGINT NOT NULL AUTO_INCREMENT, modificationCounter INTEGER NOT NULL, 
eventName VARCHAR(255), location VARCHAR(255), description VARCHAR(255), logo VARCHAR(255), attentionTime BIGINT, 
startDate TIMESTAMP,endDate TIMESTAMP,visitorsCount INTEGER, CONSTRAINT PK_Event PRIMARY KEY(id) );