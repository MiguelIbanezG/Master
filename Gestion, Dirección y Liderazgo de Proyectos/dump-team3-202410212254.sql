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

ALTER TABLE room_door ADD CONSTRAINT room_door_door_FK FOREIGN KEY (door_id) REFERENCES door(id);
ALTER TABLE room_door ADD CONSTRAINT room_door_room_FK FOREIGN KEY (room_id) REFERENCES room(id);

