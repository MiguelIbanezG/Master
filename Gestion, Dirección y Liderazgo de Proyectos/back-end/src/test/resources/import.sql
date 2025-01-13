DROP TABLE IF EXISTS `room_co2`;
DROP TABLE IF EXISTS `room_people`;
DROP TABLE IF EXISTS `room_temperature`;
DROP TABLE IF EXISTS `room_door`;
DROP TABLE IF EXISTS `door_open`;
DROP TABLE IF EXISTS `door`;
DROP TABLE IF EXISTS `fan_open`;
DROP TABLE IF EXISTS `fan`;
DROP TABLE IF EXISTS `light_open`;
DROP TABLE IF EXISTS `light`;
DROP TABLE IF EXISTS `window_open`;
DROP TABLE IF EXISTS `window`;
DROP TABLE IF EXISTS `room`;


CREATE TABLE `room` (
                        `id` int NOT NULL AUTO_INCREMENT,
                        `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
                        `size` int NOT NULL,
                        PRIMARY KEY (`id`),
                        UNIQUE KEY `room_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `door` (
                        `id` int NOT NULL AUTO_INCREMENT,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `door_open` (
                             `id` int NOT NULL AUTO_INCREMENT,
                             `door_id` int NOT NULL,
                             `time_stamp` datetime NOT NULL,
                             `is_open` tinyint NOT NULL,
                             PRIMARY KEY (`id`),
                             KEY `doorOpen_door_FK` (`door_id`),
                             CONSTRAINT `doorOpen_door_FK` FOREIGN KEY (`door_id`) REFERENCES `door` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `fan` (
                       `id` int NOT NULL AUTO_INCREMENT,
                       `room_id` int NOT NULL,
                       PRIMARY KEY (`id`),
                       KEY `fan_room_FK` (`room_id`),
                       CONSTRAINT `fan_room_FK` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `fan_open` (
                            `id` int NOT NULL AUTO_INCREMENT,
                            `fan_id` int NOT NULL,
                            `time_stamp` datetime NOT NULL,
                            `is_open` tinyint NOT NULL,
                            PRIMARY KEY (`id`),
                            KEY `fanOpen_fan_FK` (`fan_id`),
                            CONSTRAINT `fanOpen_fan_FK` FOREIGN KEY (`fan_id`) REFERENCES `fan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `light` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `room_id` int NOT NULL,
                         PRIMARY KEY (`id`),
                         KEY `light_room_FK` (`room_id`),
                         CONSTRAINT `light_room_FK` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `light_open` (
                              `id` int NOT NULL AUTO_INCREMENT,
                              `light_id` int NOT NULL,
                              `time_stamp` datetime NOT NULL,
                              `is_open` tinyint NOT NULL,
                              PRIMARY KEY (`id`),
                              KEY `lightOpen_light_FK` (`light_id`),
                              CONSTRAINT `lightOpen_light_FK` FOREIGN KEY (`light_id`) REFERENCES `light` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `room_co2` (
                            `id` int NOT NULL AUTO_INCREMENT,
                            `room_id` int DEFAULT NULL,
                            `time_stamp` datetime DEFAULT NULL,
                            `co2` int DEFAULT NULL,
                            PRIMARY KEY (`id`),
                            KEY `room_co2_room_FK` (`room_id`),
                            CONSTRAINT `room_co2_room_FK` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `room_door` (
                             `id` int NOT NULL AUTO_INCREMENT,
                             `room_id` int NOT NULL,
                             `door_id` int NOT NULL,
                             PRIMARY KEY (`id`),
                             UNIQUE KEY `room_door_unique` (`room_id`,`door_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `room_people` (
                               `id` int NOT NULL AUTO_INCREMENT,
                               `room_id` int NOT NULL,
                               `time_stamp` datetime NOT NULL,
                               `num_people` int NOT NULL,
                               PRIMARY KEY (`id`),
                               KEY `room_people_room_FK` (`room_id`),
                               CONSTRAINT `room_people_room_FK` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `room_temperature` (
                                    `id` int NOT NULL AUTO_INCREMENT,
                                    `room_id` int DEFAULT NULL,
                                    `time_stamp` datetime DEFAULT NULL,
                                    `temperature` decimal(5,2) DEFAULT NULL,
                                    PRIMARY KEY (`id`),
                                    KEY `room_temperature_room_FK` (`room_id`),
                                    CONSTRAINT `room_temperature_room_FK` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `window` (
                          `id` int NOT NULL AUTO_INCREMENT,
                          `room_id` int NOT NULL,
                          PRIMARY KEY (`id`),
                          KEY `window_room_FK` (`room_id`),
                          CONSTRAINT `window_room_FK` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `window_open` (
                               `id` int NOT NULL AUTO_INCREMENT,
                               `window_id` int NOT NULL,
                               `time_stamp` datetime NOT NULL,
                               `is_open` tinyint NOT NULL,
                               PRIMARY KEY (`id`),
                               KEY `windowOpen_window_FK` (`window_id`),
                               CONSTRAINT `windowOpen_window_FK` FOREIGN KEY (`window_id`) REFERENCES `window` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `room` VALUES (1,'room101',100),(2,'Room102',50),(3,'Lobby1',60);
INSERT INTO `room_door` VALUES (5,1,1),(7,1,2),(8,2,2),(6,3,1);
INSERT INTO `room_people` VALUES (58,1,'2022-02-15 08:00:00',0),(59,1,'2022-02-15 08:00:05',0),(60,1,'2022-02-15 08:45:00',1),(61,1,'2022-02-15 09:00:00',2),(62,1,'2022-02-15 09:15:00',2),(63,1,'2022-02-15 09:30:00',2),(64,1,'2022-02-15 09:45:00',2),(65,1,'2022-02-15 10:00:00',3),(66,1,'2022-02-15 10:15:00',0),(67,1,'2022-02-15 10:30:00',1),(68,1,'2022-02-15 11:00:00',2),(69,1,'2022-02-15 11:15:00',3),(70,1,'2022-02-15 11:45:00',4),(71,1,'2022-02-15 12:00:00',5),(72,1,'2022-02-15 15:00:00',5),(73,1,'2022-02-15 15:40:00',4),(74,1,'2022-02-15 17:00:00',3),(75,1,'2022-02-15 17:30:00',0),(76,1,'2022-02-15 18:00:00',0),(77,2,'2022-02-15 08:00:00',0),(78,2,'2022-02-15 08:00:05',0),(79,2,'2022-02-15 08:45:00',1),(80,2,'2022-02-15 09:00:00',2),(81,2,'2022-02-15 09:15:00',2),(82,2,'2022-02-15 09:30:00',2),(83,2,'2022-02-15 09:45:00',2),(84,2,'2022-02-15 10:00:00',3),(85,2,'2022-02-15 10:15:00',0),(86,2,'2022-02-15 10:30:00',1),(87,2,'2022-02-15 11:00:00',2),(88,2,'2022-02-15 11:15:00',3),(89,2,'2022-02-15 11:45:00',4),(90,2,'2022-02-15 12:00:00',5),(91,2,'2022-02-15 15:00:00',5),(92,2,'2022-02-15 15:40:00',4),(93,2,'2022-02-15 17:00:00',3),(94,2,'2022-02-15 17:30:00',0),(95,2,'2022-02-15 18:00:00',0),(96,3,'2022-02-15 08:00:00',0),(97,3,'2022-02-15 08:00:05',0),(98,3,'2022-02-15 08:45:00',1),(99,3,'2022-02-15 09:00:00',2),(100,3,'2022-02-15 09:15:00',2),(101,3,'2022-02-15 09:30:00',2),(102,3,'2022-02-15 09:45:00',2),(103,3,'2022-02-15 10:00:00',3),(104,3,'2022-02-15 10:15:00',0),(105,3,'2022-02-15 10:30:00',1),(106,3,'2022-02-15 11:00:00',2),(107,3,'2022-02-15 11:15:00',3),(108,3,'2022-02-15 11:45:00',4),(109,3,'2022-02-15 12:00:00',5),(110,3,'2022-02-15 15:00:00',5),(111,3,'2022-02-15 15:40:00',4),(112,3,'2022-02-15 17:00:00',3),(113,3,'2022-02-15 17:30:00',0),(114,3,'2022-02-15 18:00:00',0);
INSERT INTO `door` VALUES (1),(2);
INSERT INTO `door_open` VALUES (2,1,'2022-02-15 08:00:00',0),(3,1,'2022-02-15 08:00:05',0),(4,2,'2022-02-15 08:45:00',0),(5,2,'2022-02-15 09:00:00',0),(6,1,'2022-02-15 09:15:00',0),(7,1,'2022-02-15 09:30:00',0),(8,2,'2022-02-15 09:45:00',0),(9,2,'2022-02-15 10:00:00',0),(10,1,'2022-02-15 10:15:00',0),(11,1,'2022-02-15 10:30:00',0),(12,2,'2022-02-15 11:00:00',0),(13,2,'2022-02-15 11:15:00',0),(14,1,'2022-02-15 11:45:00',0),(15,1,'2022-02-15 12:00:00',0),(16,2,'2022-02-15 15:00:00',0),(17,2,'2022-02-15 15:40:00',0),(18,1,'2022-02-15 17:00:00',0),(19,1,'2022-02-15 17:30:00',0),(20,2,'2022-02-15 18:00:00',0);
INSERT INTO `fan` VALUES (1,1),(2,2);
INSERT INTO `fan_open` VALUES (1,1,'2022-02-15 08:00:00',0),(2,1,'2022-02-15 08:00:05',0),(3,1,'2022-02-15 08:45:00',0),(4,1,'2022-02-15 09:00:00',0),(5,1,'2022-02-15 09:15:00',0),(6,1,'2022-02-15 09:30:00',0),(7,1,'2022-02-15 09:45:00',0),(8,1,'2022-02-15 10:00:00',0),(9,1,'2022-02-15 10:15:00',0),(10,1,'2022-02-15 10:30:00',0),(11,1,'2022-02-15 11:00:00',0),(12,1,'2022-02-15 11:15:00',0),(13,1,'2022-02-15 11:45:00',0),(14,1,'2022-02-15 12:00:00',0),(15,1,'2022-02-15 15:00:00',0),(16,1,'2022-02-15 15:40:00',0),(17,1,'2022-02-15 17:00:00',0),(18,1,'2022-02-15 17:30:00',0),(19,1,'2022-02-15 18:00:00',0),(20,2,'2022-02-15 08:00:00',0),(21,2,'2022-02-15 08:00:05',0),(22,2,'2022-02-15 08:45:00',0),(23,2,'2022-02-15 09:00:00',0),(24,2,'2022-02-15 09:15:00',0),(25,2,'2022-02-15 09:30:00',0),(26,2,'2022-02-15 09:45:00',0),(27,2,'2022-02-15 10:00:00',0),(28,2,'2022-02-15 10:15:00',0),(29,2,'2022-02-15 10:30:00',0),(30,2,'2022-02-15 11:00:00',0),(31,2,'2022-02-15 11:15:00',0),(32,2,'2022-02-15 11:45:00',0),(33,2,'2022-02-15 12:00:00',0),(34,2,'2022-02-15 15:00:00',0),(35,2,'2022-02-15 15:40:00',0),(36,2,'2022-02-15 17:00:00',0),(37,2,'2022-02-15 17:30:00',0),(38,2,'2022-02-15 18:00:00',0);
INSERT INTO `window` VALUES (1,1),(2,1),(3,2),(4,2),(5,3);
INSERT INTO `window_open` VALUES (1,1,'2022-02-15 08:00:00',0),(2,1,'2022-02-15 08:00:05',0),(3,2,'2022-02-15 08:45:00',0),(4,2,'2022-02-15 09:00:00',0),(5,1,'2022-02-15 09:15:00',0),(6,1,'2022-02-15 09:30:00',0),(7,2,'2022-02-15 09:45:00',0),(8,2,'2022-02-15 10:00:00',0),(9,1,'2022-02-15 10:15:00',0),(10,1,'2022-02-15 10:30:00',0),(11,2,'2022-02-15 11:00:00',0),(12,2,'2022-02-15 11:15:00',0),(13,1,'2022-02-15 11:45:00',0),(14,1,'2022-02-15 12:00:00',0),(15,2,'2022-02-15 15:00:00',0),(16,2,'2022-02-15 15:40:00',0),(17,1,'2022-02-15 17:00:00',0),(18,1,'2022-02-15 17:30:00',0),(19,2,'2022-02-15 18:00:00',0);

