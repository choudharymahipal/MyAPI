-- MySQL dump 10.13  Distrib 8.0.41, for macos15 (arm64)
--
-- Host: localhost    Database: mysql_db
-- ------------------------------------------------------
-- Server version	8.4.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Death_Registration`
--

DROP TABLE IF EXISTS `Death_Registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Death_Registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `death_date` date NOT NULL,
  `deceased_name` varchar(255) NOT NULL,
  `father_or_spouse_name` varchar(255) NOT NULL,
  `gender` enum('Male','Female','Transgender') NOT NULL,
  `age` int NOT NULL,
  `place_of_death` varchar(255) NOT NULL,
  `cause_of_death` text,
  `medical_facility_received` text,
  `death_during_treatment` enum('Yes','No') DEFAULT NULL,
  `death_certified` enum('Yes','No') DEFAULT NULL,
  `disease_name` varchar(255) DEFAULT NULL,
  `current_residence` varchar(255) DEFAULT NULL,
  `permanent_residence` varchar(255) DEFAULT NULL,
  `caste` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `female_death_condition` text,
  `substance_type` varchar(255) DEFAULT NULL,
  `substance_usage_duration` varchar(255) DEFAULT NULL,
  `funeral_date_time` datetime DEFAULT NULL,
  `cremation_date_time` datetime DEFAULT NULL,
  `cremator_name` varchar(255) DEFAULT NULL,
  `cremator_relation` varchar(255) DEFAULT NULL,
  `informant_name` varchar(255) DEFAULT NULL,
  `informant_relation` varchar(255) DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Death_Registration`
--

LOCK TABLES `Death_Registration` WRITE;
/*!40000 ALTER TABLE `Death_Registration` DISABLE KEYS */;
INSERT INTO `Death_Registration` VALUES (1,'2024-12-23','Hello World','Father Name','Male',23,'Jaipur','Corona','Yes','No','Yes','Corona','Jodhpur','Bikaner','Sharma','Indian','Student','NA','NA','NA','2024-12-25 00:00:00','2024-12-25 00:00:00','Rohit Sharma','Father','Anuj Sharma','Brother','admin@gmail.com'),(2,'2022-05-12','Test person','Joy smith','Male',24,'City Hospital, Jaipur','Corona','No','No','Yes','Corona','Kota','Kota','Jain','Indian','Police Inspector','NA','NA','NA',NULL,'2022-08-22 05:00:00','Komal Jain','Wife','Komal','Wife','mahipal@gmail.com'),(3,'2023-11-01','Kajal Sharma','Kamal Sharma','Female',28,'Sardarpura','Heart Attack','No','No','Yes','Heart Attack','Sardarpura','Sardarpura','Sharma','Hindu','Operator','No','No','No',NULL,'2023-11-01 03:45:00','Kamal Sharma','Husband','Kamal Sharma','Husband','mahipal@gmail.com');
/*!40000 ALTER TABLE `Death_Registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-21 23:58:10
