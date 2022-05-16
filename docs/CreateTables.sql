CREATE TABLE `rentapartner`.`Role` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`Name` varchar(20) NOT NULL,
	`Description` varchar(255) NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `rentapartner`.`User` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`RoleId` int NOT NULL,
	`Name` varchar(50) NOT NULL,
	`Surname` varchar(50) NOT NULL,
	`Phone` char(10) NOT NULL,
	`Email` varchar(150) NOT NULL,
	`Location` varchar(50) NOT NULL,
	`ProfilePicUrl` varchar(255) NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`RoleId`) REFERENCES `rentapartner`.`Role`(`Id`) 
);

CREATE TABLE `rentapartner`.`Image` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`UserId` int NOT NULL,
	`Url` varchar(255) NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`UserId`) REFERENCES `rentapartner`.`User`(`Id`) 
);

CREATE TABLE `rentapartner`.`Rating` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`UserId` int NOT NULL,
	`Score` int NOT NULL,
	`Comment` varchar(500) NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`UserId`) REFERENCES `rentapartner`.`User`(`Id`) 
);

CREATE TABLE `rentapartner`.`Status` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`Name` varchar(50) NOT NULL,
	`Description` varchar(500) NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `rentapartner`.`Event` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`StatusId` int NOT NULL,
	`UserId` int NOT NULL,
	`Title` varchar(100) NOT NULL,
	`Date` datetime DEFAULT CURRENT_TIMESTAMP NULL,
	`Location` varchar(150) NOT NULL,
	`Description` varchar(1000) NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`StatusId`) REFERENCES `rentapartner`.`Status`(`Id`) ,
    FOREIGN KEY (`UserId`) REFERENCES `rentapartner`.`User`(`Id`) 
);

CREATE TABLE `rentapartner`.`Booking` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`EventId` int NOT NULL,
	`StatusId` int NOT NULL,
	`UserId` int NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`EventId`) REFERENCES `rentapartner`.`Event`(`Id`) ,
    FOREIGN KEY (`StatusId`) REFERENCES `rentapartner`.`Status`(`Id`) ,
    FOREIGN KEY (`UserId`) REFERENCES `rentapartner`.`User`(`Id`) 
);

CREATE TABLE `rentapartner`.`Profile` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`UserId` int UNIQUE NOT NULL,
	`Gender` varchar(20) NOT NULL,
	`DateOfBirth` date NOT NULL,
	`GenderOfInterest` varchar(20) NOT NULL,
	`Race` varchar(20) NULL,
	`Height` float NULL,
	`Language` varchar(50) NULL,
	`Bio` varchar(1000) NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`UserId`) REFERENCES `rentapartner`.`User`(`Id`) 
);