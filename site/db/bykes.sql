CREATE DATABASE  IF NOT EXISTS `bykes` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `bykes`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bykes
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `streetName` varchar(100) NOT NULL,
  `additionalNumbers` varchar(100) DEFAULT NULL,
  `idNeighbourhood` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idNeighbourhood_idx` (`idNeighbourhood`),
  CONSTRAINT `idNeighbourhood` FOREIGN KEY (`idNeighbourhood`) REFERENCES `neighbourhoods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_user`
--

DROP TABLE IF EXISTS `article_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  `idArticle` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser_idx` (`idUser`),
  KEY `idArticle_idx` (`idArticle`),
  CONSTRAINT `idArticle` FOREIGN KEY (`idArticle`) REFERENCES `articles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_user`
--

LOCK TABLES `article_user` WRITE;
/*!40000 ALTER TABLE `article_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `styleId` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `techDescription` varchar(500) DEFAULT NULL,
  `colors` varchar(100) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `shot` varchar(10) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `financing` tinyint(1) DEFAULT NULL,
  `financingSize` int(11) DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `styleId_idx` (`styleId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (21,'Scott','SCOTT - SPEEDSTER 10',0,'Scott Speedster 10 es la mejor representación de la autonomía. Podrás movilizarte libremente cada día.','La nueva Speedster es más ligera y presenta su mejor estilo. El nuevo kit de cuadro incluye una horquilla de carbono, cableado interior, dirección cónica y una geometría de prestaciones. Cambios Shimano 105 Black ST-5800 Dual control 22 Speed.','Violeta','S','27.5',60000.00,0,0,12,'bici-1597185718802.jpg','2020-08-11 22:41:58','2020-08-11 22:41:58',NULL),(22,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja',NULL,'29',65000.00,0,0,12,'bici-1597239177198.jpg','2020-08-12 13:32:57','2020-08-12 13:32:57',NULL),(23,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja',NULL,'29',65000.00,0,0,12,'bici-1597239545146.jpg','2020-08-12 13:39:05','2020-08-12 13:39:05',NULL),(24,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja',NULL,NULL,65000.00,0,0,12,'bici-1597239858094.jpg','2020-08-12 13:44:18','2020-08-12 13:44:18',NULL),(25,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja',NULL,'29',65000.00,0,0,12,'bici-1597239922803.jpg','2020-08-12 13:45:22','2020-08-12 13:45:22',NULL),(26,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja',NULL,'29',65000.00,0,0,12,'bici-1597240148685.jpg','2020-08-12 13:49:08','2020-08-12 13:49:08',NULL),(27,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja',NULL,'27.5',65000.00,0,0,12,'bici-1597240263176.jpg','2020-08-12 13:51:03','2020-08-12 13:51:03',NULL),(28,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja','M','29',65000.00,0,0,12,'bici-1597240463301.jpg','2020-08-12 13:54:23','2020-08-12 13:54:23',NULL),(29,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja','M','29',65000.00,0,0,12,'bici-1597240720325.jpg','2020-08-12 13:58:40','2020-08-12 13:58:40',NULL),(30,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja','L','29',65000.00,0,0,12,'bici-1597241267982.jpg','2020-08-12 14:07:48','2020-08-12 14:07:48',NULL),(31,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja','XL','29',65000.00,0,0,12,'bici-1597256344659.jpg','2020-08-12 18:19:04','2020-08-12 18:19:04',NULL),(32,'Scott','SCOTT - SCALE 970',0,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja','L','29',65000.00,0,0,12,'bici-1597256964407.jpg','2020-08-12 18:29:24','2020-08-12 18:29:24',NULL);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customs`
--

DROP TABLE IF EXISTS `customs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idFrame` int(11) NOT NULL,
  `idWheel` int(11) NOT NULL,
  `idEquipment` int(11) NOT NULL,
  `idStyle` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` int(11) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idFrame_idx` (`idFrame`),
  KEY `idWheel_idx` (`idWheel`),
  KEY `idEquipment_idx` (`idEquipment`),
  KEY `idStyle_idx` (`idStyle`),
  CONSTRAINT `idEquipment` FOREIGN KEY (`idEquipment`) REFERENCES `equipments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idFrame` FOREIGN KEY (`idFrame`) REFERENCES `frames` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idStyle` FOREIGN KEY (`idStyle`) REFERENCES `styles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idWheel` FOREIGN KEY (`idWheel`) REFERENCES `wheels` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customs`
--

LOCK TABLES `customs` WRITE;
/*!40000 ALTER TABLE `customs` DISABLE KEYS */;
/*!40000 ALTER TABLE `customs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipments`
--

DROP TABLE IF EXISTS `equipments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipments`
--

LOCK TABLES `equipments` WRITE;
/*!40000 ALTER TABLE `equipments` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frame_wheel`
--

DROP TABLE IF EXISTS `frame_wheel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `frame_wheel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idFrame` int(11) NOT NULL,
  `idWheel` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frame_wheel`
--

LOCK TABLES `frame_wheel` WRITE;
/*!40000 ALTER TABLE `frame_wheel` DISABLE KEYS */;
/*!40000 ALTER TABLE `frame_wheel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frames`
--

DROP TABLE IF EXISTS `frames`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `frames` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `colorStyle` varchar(100) NOT NULL,
  `primaryColor` varchar(100) NOT NULL,
  `secondaryColor` varchar(100) DEFAULT NULL,
  `primaryForkColor` varchar(100) NOT NULL,
  `secondaryForkColor` varchar(100) DEFAULT NULL,
  `frameSize` varchar(10) NOT NULL,
  `idFrameWheel` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idFrameWheel_idx` (`idFrameWheel`),
  CONSTRAINT `idFrameWheel` FOREIGN KEY (`idFrameWheel`) REFERENCES `frame_wheel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frames`
--

LOCK TABLES `frames` WRITE;
/*!40000 ALTER TABLE `frames` DISABLE KEYS */;
/*!40000 ALTER TABLE `frames` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `neighbourhoods`
--

DROP TABLE IF EXISTS `neighbourhoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `neighbourhoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `zipCode` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `neighbourhoods`
--

LOCK TABLES `neighbourhoods` WRITE;
/*!40000 ALTER TABLE `neighbourhoods` DISABLE KEYS */;
/*!40000 ALTER TABLE `neighbourhoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `styles`
--

DROP TABLE IF EXISTS `styles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `styles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `styles`
--

LOCK TABLES `styles` WRITE;
/*!40000 ALTER TABLE `styles` DISABLE KEYS */;
INSERT INTO `styles` VALUES (1,'Fixie',NULL,NULL,NULL),(2,'Mountain',NULL,NULL,NULL),(3,'Urban',NULL,NULL,NULL);
/*!40000 ALTER TABLE `styles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `dni` int(11) NOT NULL,
  `phoneNumber` int(11) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `category` int(11) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `idAddress` int(11) NOT NULL,
  `id_user_article` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phoneNumber_UNIQUE` (`phoneNumber`),
  UNIQUE KEY `image_UNIQUE` (`image`),
  KEY `id_user_article_idx` (`id_user_article`),
  KEY `idAddress_idx` (`idAddress`),
  CONSTRAINT `idAddress` FOREIGN KEY (`idAddress`) REFERENCES `addresses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_user_article` FOREIGN KEY (`id_user_article`) REFERENCES `article_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wheels`
--

DROP TABLE IF EXISTS `wheels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wheels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `spokeColor` varchar(100) DEFAULT NULL,
  `hubColor` varchar(100) DEFAULT NULL,
  `idWheelFrame` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idWheelFrame_idx` (`idWheelFrame`),
  CONSTRAINT `idWheelFrame` FOREIGN KEY (`idWheelFrame`) REFERENCES `frame_wheel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wheels`
--

LOCK TABLES `wheels` WRITE;
/*!40000 ALTER TABLE `wheels` DISABLE KEYS */;
/*!40000 ALTER TABLE `wheels` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-13 18:18:53