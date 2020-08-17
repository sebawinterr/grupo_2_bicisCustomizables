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
  `financing` varchar(10) DEFAULT NULL,
  `financingSize` int(11) DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `idArticleUser` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `styleId_idx` (`styleId`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (34,'Scott','SCOTT - SPEEDSTER 10',1,'Scott Speedster 10 es la mejor representación de la autonomía. Podrás movilizarte libremente cada día.','La nueva Speedster es más ligera y presenta su mejor estilo. El nuevo kit de cuadro incluye una horquilla de carbono, cableado interior, dirección cónica y una geometría de prestaciones. Cambios Shimano 105 Black ST-5800 Dual control 22 Speed.','Violeta','S','27.5',60000.00,0,'si',12,'bici-1597671867305.jpg',0,'2020-08-17 13:44:28','2020-08-17 13:44:28',NULL),(35,'Scott','SCOTT - SCALE 970',2,'Scott Scale 970 es la bicicleta perfecta para los buscadores constantes de una mayor independencia en la vida cotidiana.','La Scale 970 de SCOTT viene equipada con una horquilla Rock Shox y tecnología de bloqueo remoto para permitir diferentes ajustes de recorrido en función de las necesidades de cada momento. Cambios Shimano SLX-Deore de 24 velocidades.','Negro con Naranja','M','29',65000.00,0,'si',12,'bici-1597672117175.jpg',0,'2020-08-17 13:48:37','2020-08-17 13:48:37',NULL),(36,'Aventon','AVENTON MATARO',1,'La Aventon Mataro es la bicicleta que por sus caracteristicas te permite desafiar lo establecido superando tus propios límites','Cuadro de aluminio 6061 ultra liviano. Horquilla de fibra de carbono y stem de aluminio. Vela y silla aerodinamicos y liviandos. Fixie o single-speed gracias a una maza Flip-Flop. Viene en los colores Midnight Blue o Mataro White','Mataro White','M','27.5',80000.00,0,'si',12,'bici-1597672247448.jpg',0,'2020-08-17 13:50:47','2020-08-17 13:50:47',NULL),(37,'Aventon','AVENTON CORDOBA',1,'La Aventon Cordoba te permite encontrar una nueva interpretación del tiempo, espacio y cuerpo en cada una de tus salidas.','Cuadro de aluminio 6061 ultra liviano. Horquilla de fibra de carbono y stem de aluminio. El nuevo Dropout forjado permite un mas amplio rango de ajuste de tension para la cadena. Fixie o single-speed gracias a una maza Flip-Flop. Viene en los colores Desert y Cool Smoke','Cool Smoke','L','27.5',45000.00,0,'si',12,'bici-1597672357732.jpg',0,'2020-08-17 13:52:37','2020-08-17 13:52:37',NULL),(38,'Trek','TREK - REMEDY 9.7',2,'Trek Remedy 9.7 representa tu propio afan por lo desconocido. Desafiá tus límites!','Cuadro de fibra de carbono full OCLV. Horquilla RockShox premium de largo recorrido. Suspension trasera de 150mm. 150mm rear suspension. Transmision SRAM de 12 velocidades. Talles desde S a XL. Viene en los colores Battleship Blue y Volt Green Fade','Battleship Blue','S','29',60000.00,0,'si',12,'bici-1597672501008.jpeg',0,'2020-08-17 13:55:01','2020-08-17 13:55:01',NULL),(39,'Canyon','CANYON - COMMUTER 5.0',3,'Una nueva forma de transitar con mayor libertad. Podrás ir al trabajo cada mañana sin preocupaciones y disfrutando de tu bicicleta.','Equipada con un cambio de 8 velocidades integrado en el buje de Shimano y una transmisión de correa Gates.Frenos de disco Shimano y cubiertas Schwalbe garantizan un control total en todo tipo de condiciones. Talles del XS al XL. Viene en los colores Stealth y Petrol','Stealth','L','27.5',30000.00,0,'si',12,'bici-1597672655243.jpg',0,'2020-08-17 13:57:35','2020-08-17 13:57:35',NULL),(40,'Capri','CAPRI - BERLIN MAN',3,'Capri Berlin es sinónimo de experiencia. Aquí el pasado se convierte en la llave y ruta de acceso para rememorar momentos épicos y buscar buenos nuevos gratificantes.','Cambios Shimano SIS TX35 de 6 velocidades. Cuadro de acero con soldadura TIG. Horquilla de acero conificada. Biela de aluminio con plato de 44 dientes. Sillin de semipiel hecho en Italia y puños de goma a juego. Portabultos trasero del mismo color que el cuadro. Viene solo en color Negro con Marron Torino.','Negro con Marrón Torino','M','29',48000.00,0,'si',12,'bici-1597672798871.jpg',0,'2020-08-17 13:59:59','2020-08-17 13:59:59',NULL),(41,'Kona','KONA - PROCESS 134 DL',2,'La Kona Process 134 es tu sentimiento de libertad. Su autonomía te permite transitar libremente cualquier tipo de terreno.','Cuadro de aluminio. Amortiguador trasero RockShox Deluxe Ultimate. Horquilla RockShox Pike Select RC Charger DebonAir 140mm. Frenos Guide R con rotores delanteros y traseros de 180mm. Disponible en rodado 29 y talle del S al XL.','Violeta con Negro','S','29',65000.00,0,'si',12,'bici-1597672934941.jpg',0,'2020-08-17 14:02:14','2020-08-17 14:02:14',NULL),(42,'Black Label','BLACK LABEL - 6061 V2',1,'La Black Label 6061 v2 es la resignificación del concepto de movilización. La máxima expresión de la bicicleta como medio alternativo independiente al transporte público.','Cuadro de aluminio 6061, doble conificado y soldado. Horquilla de fibra de carbono. Disponible en rodado 27.5 y 29 en los talles S al XL.','Verde militar','L','29',55000.00,0,'si',12,'bici-1597673056768.jpg',0,'2020-08-17 14:04:16','2020-08-17 14:04:16',NULL),(43,'Cinelli','CINELLI - PISTA 19',1,'Es la bicicleta pensada especialmente para atravesar la ciudad con estilo e imponer tu propia impronta en el camino.','La Tipo Pista es una bicicleta sin cambios perfecta para iniciarse con las bicis de piñon fijo y mas.Ideal tanto para la pista como la ciudad, viene equipada con frenos a pedal. Cubiertas Duro 700x25 y cadena KMC. Cuadro y horquilla de aluminio. Disponible en rodado 27.5 y 29, talle del S al L','Amarillo','L','27.5',45000.00,0,'si',12,'bici-1597673194212.jpg',0,'2020-08-17 14:06:34','2020-08-17 14:06:34',NULL);
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
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleUserId` int(11) NOT NULL,
  `paymentId` int(11) NOT NULL,
  `shipmentId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `articleUserId_idx` (`articleUserId`),
  KEY `paymentId_idx` (`paymentId`),
  KEY `shipmentId_idx` (`shipmentId`),
  CONSTRAINT `articleUserId` FOREIGN KEY (`articleUserId`) REFERENCES `article_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `paymentId` FOREIGN KEY (`paymentId`) REFERENCES `payment_methods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `shipmentId` FOREIGN KEY (`shipmentId`) REFERENCES `shipments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipments`
--

DROP TABLE IF EXISTS `shipments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addressId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addressId_idx` (`addressId`),
  CONSTRAINT `addressId` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipments`
--

LOCK TABLES `shipments` WRITE;
/*!40000 ALTER TABLE `shipments` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipments` ENABLE KEYS */;
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
  `idAddress` int(11) DEFAULT NULL,
  `idUserArticle` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phoneNumber_UNIQUE` (`phoneNumber`),
  UNIQUE KEY `image_UNIQUE` (`image`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mariano','Torrecilla',34265210,15444888,'marianotorrecilla@bykes.com','$2b$10$5IQhBuRbAYFOZZYC8H/g6eIrFHx68WOHP.n3lGYpeNxCmnQ47NY86',9,'foto-1597506139146.jpg',NULL,NULL,'2020-08-15 15:42:19','2020-08-15 15:42:19',NULL),(2,'Juan ','Esperon',40258258,15666777,'juanesperon@bykes.com','$2b$10$R4d/wamdnifYXW2RVbcV8OKVx0jseCenf1.B8J1V4WUeoJZ7wZ1I.',9,'foto-1597510869871.jpg',NULL,NULL,'2020-08-15 17:01:09','2020-08-15 17:01:09',NULL),(4,'Marcelo','Gómez',29879879,15456789,'mgomez@gmail.com','$2b$10$Jsn//d/ADzZA2h7cy9/fVex/wS3rwcG6RIb3Ju5SDraniiwjYpdwW',0,'foto-1597624968838.jpg',NULL,NULL,'2020-08-17 00:42:49','2020-08-17 01:03:49',NULL);
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
  `shotWheel` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
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

-- Dump completed on 2020-08-17 11:47:43
