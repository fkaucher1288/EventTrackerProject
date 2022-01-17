-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema capratedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `capratedb` ;

-- -----------------------------------------------------
-- Schema capratedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `capratedb` DEFAULT CHARACTER SET utf8 ;
USE `capratedb` ;

-- -----------------------------------------------------
-- Table `Property`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Property` ;

CREATE TABLE IF NOT EXISTS `Property` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `market_price` INT NULL,
  `expected_cashflow` INT NULL,
  `cap_rate` DOUBLE NULL,
  `prop_photo` VARCHAR(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS investor@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'investor'@'localhost' IDENTIFIED BY 'investor';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'investor'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Property`
-- -----------------------------------------------------
START TRANSACTION;
USE `capratedb`;
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (1, '1234 Golden Ln', 'Denver', 'Colorado', 365000, 21600, 5.92, 'https://www.shutterstock.com/image-photo/small-clapboard-siding-house-view-porch-182798594');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (2, '22832 Return Ln', 'Waynesville', 'Missouri', 158800, 12900, 8.12, 'https://www.zillow.com/homedetails/22832-Return-Ln-Waynesville-MO-65583/114963624_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (3, '2121 N Marion St Unit 5', 'Denver', 'Colorado', 587000, 42000, 7.16, 'https://www.zillow.com/homedetails/2121-N-Marion-St-5-Denver-CO-80205/251841538_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (4, '2830 Sagebrush Dr', 'Fort Collins', 'Colorado', 425000, 21000, 4.94, 'https://www.zillow.com/homedetails/2830-Sagebrush-Dr-Fort-Collins-CO-80525/13869369_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (5, '2033 Routt St', 'Pueblo', 'Colorado', 179000, 19200, 10.73, 'https://www.zillow.com/homedetails/2033-E-Routt-Ave-Pueblo-CO-81004/14039775_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (6, '2816 Fourth Ave', 'Pueblo', 'Colorado', 245000, 14400, 5.88, 'https://www.zillow.com/homedetails/2816-4th-Ave-Pueblo-CO-81003/14013783_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (7, '4807 E Okara Rd', 'Tampa', 'Florida', 185000, 16200, 8.76, 'https://www.zillow.com/homedetails/4807-E-Okara-Rd-Tampa-FL-33617/45074995_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (8, '1451 Hwy 90 W', 'Holt', 'Florida', 350000, 18000, 5.14, 'https://www.zillow.com/homedetails/1451-Highway-90-W-Holt-FL-32564/46022944_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (9, '3708 Roosevelt Rd', 'Wellington', 'Colorado', 315000, 15000, 4.77, 'https://www.zillow.com/homedetails/3708-Roosevelt-Ave-Wellington-CO-80549/13874246_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (10, '942 E Abriendo Ave', 'Pueblo', 'Colorado', 199000, 14400, 7.23, 'https://www.zillow.com/homedetails/942-E-Abriendo-Ave-Pueblo-CO-81004/14030512_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (11, '1240 Deserado Dr', 'Rangely', 'Colorado', 217000, 13200, 6.08, 'https://www.zillow.com/homedetails/1240-Deserado-Dr-Rangely-CO-81648/104596488_zpid/');
INSERT INTO `Property` (`id`, `address`, `city`, `state`, `market_price`, `expected_cashflow`, `cap_rate`, `prop_photo`) VALUES (12, '5939 Park St', 'Evergreen', 'Colorado', 274000, 14400, 5.25, 'https://www.zillow.com/homedetails/5939-Park-St-Evergreen-CO-80439/13804912_zpid/');

COMMIT;

