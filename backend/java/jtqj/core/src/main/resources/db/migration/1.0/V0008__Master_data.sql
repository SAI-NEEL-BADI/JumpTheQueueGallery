INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial, 
acceptedTerms, userType) VALUES (1, 1, 'mike@mail.com', 'test', '1', '123456789', '0', '1', '1'); 
INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial, 
acceptedTerms, userType) VALUES (2, 1, 'peter@mail.com', 'test', '1', '123456789', '1', '1', '0'); 

INSERT INTO Event (id, modificationCounter, 
eventName, location, description, logo, attentionTime, 
startDate,endDate,visitorsCount) VALUES (1, 1, 'SNACKS','Banglore','Biggest Food Fest', NULL, 50000, 
'2021-01-01 00:01:00','2021-02-01 00:01:00',0);

INSERT INTO Event (id, modificationCounter, 
eventName, location, description, logo, attentionTime, 
startDate,endDate,visitorsCount) VALUES (2, 1, 'CORONA','Banglore','Biggest Pandemic Moment', NULL, 10000, 
'2021-01-01 00:01:00','2021-02-01 00:01:00',0);

INSERT INTO Event (id, modificationCounter, 
eventName, location, description, logo, attentionTime, 
startDate,endDate,visitorsCount) VALUES (3, 1, 'GO FRESH','Banglore','Eat Well Stay Well', NULL, 25000, 
'2021-01-01 00:01:00','2021-02-01 00:01:00',0);

INSERT INTO Event (id, modificationCounter, 
eventName, location, description, logo, attentionTime, 
startDate,endDate,visitorsCount) VALUES (4, 1, 'HEALTHY','Banglore','Health is Wealth', NULL, 55000, 
'2021-01-01 00:01:00','2021-02-01 00:01:00',0);


INSERT INTO QueueDetail (id, modificationCounter, 
queueNumber, creationTime, startTime, endTime, 
idVisitor, idEvent, estimatedTime, attentionTime) 
VALUES (1, 1, 'Q001', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO QueueDetail (id, modificationCounter, 
queueNumber, creationTime, startTime, endTime, 
idVisitor, idEvent, estimatedTime, attentionTime) 
VALUES (2, 1, 'Q002', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);