use LosOsitos

CREATE TABLE Country (
Name VARCHAR(30),
PRIMARY KEY (Name)
);


CREATE TABLE Person (
ID CHAR(15),
Name VARCHAR(15) NOT NULL,
LastName1 VARCHAR(15) NOT NULL,
LastName2 VARCHAR(15),
Gender INT,
Birth_Date DATE,
Email VARCHAR(50) NOT NULL,
Country_Name VARCHAR(30),
State VARCHAR(30),
PRIMARY KEY (ID),
FOREIGN KEY (Country_Name) REFERENCES Country(Name) ON DELETE SET NULL
);


CREATE TABLE Client (
ID_Person CHAR(15)
PRIMARY KEY (ID_Person),
FOREIGN KEY (ID_Person) REFERENCES Person(ID) ON DELETE CASCADE
);


CREATE TABLE Testimony (
ID_Client CHAR(15),
Description VARCHAR(246) NOT NULL,
State TINYINT NOT NULL,
Date DATE NOT NULL,
PRIMARY KEY (ID_Client),
FOREIGN KEY (ID_Client) REFERENCES Client(ID_Person) ON DELETE CASCADE
);

CREATE TABLE Employee (
ID_Person CHAR(15),
Username VARCHAR(15) NOT NULL,
Password VARCHAR(15) NOT NULL,
Type INT NOT NULL,
PRIMARY KEY (ID_Person),
FOREIGN KEY (ID_Person) REFERENCES Person(ID) ON DELETE CASCADE
);

CREATE TABLE Reservation (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Payment_Method INT NOT NULL,
Payment_Proof VARCHAR(MAX),
Status TINYINT NOT NULL,
Reservation_Method INT NOT NULL,
PRIMARY KEY (ID_Client, Reservation_Date),
FOREIGN KEY (ID_Client) REFERENCES Client(ID_Person) ON DELETE CASCADE
);

CREATE TABLE Picnic (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Picnic_Date DATE NOT NULL,
PRIMARY KEY (ID_Client, Reservation_Date),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date) ON DELETE CASCADE
);

CREATE TABLE Camping (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Start_Date DATE NOT NULL,
End_Date DATE NOT NULL,
PRIMARY KEY (ID_Client, Reservation_Date),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date) ON DELETE CASCADE
);

CREATE TABLE Spot (
Location INT,
Size INT NOT NULL,
PRIMARY KEY (Location)
);

CREATE TABLE Spot_Price (
Currency VARCHAR(15),
Price DECIMAL(18,2),
Location_Spot INT,
PRIMARY KEY (Location_Spot, Price, Currency),
FOREIGN KEY (Location_Spot) REFERENCES Spot(Location) ON DELETE CASCADE
);

CREATE TABLE Spot_Camping (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Location_Spot INT,
Price DECIMAL(18,2) NOT NULL,
PRIMARY KEY (ID_Client, Reservation_Date, Location_Spot),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Camping(ID_Client, Reservation_Date),
FOREIGN KEY (Location_Spot) REFERENCES Spot(Location)
);

CREATE TABLE Service (
Name VARCHAR(30),
Quantity INT NOT NULL,
PRIMARY KEY (Name)
);

CREATE TABLE Service_Price (
Currency VARCHAR(15),
Price DECIMAL(18,2),
Name_Service VARCHAR(30),
PRIMARY KEY (Name_Service, Price, Currency),
FOREIGN KEY (Name_Service) REFERENCES Service(Name) ON DELETE CASCADE
);

CREATE TABLE Service_Reservation (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Name_Service VARCHAR(30),
Price DECIMAL(18, 2) NOT NULL,
PRIMARY KEY (ID_Client, Reservation_Date, Name_Service),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date),
FOREIGN KEY (Name_Service) REFERENCES Service(Name)
);

CREATE TABLE Ticket (
Age_Range INT,
Demographic_Group INT,
Reservation_Type INT,
Special INT,
Currency VARCHAR(15) NOT NULL,
Price DECIMAL(18,2) NOT NULL,
PRIMARY KEY (Age_Range, Demographic_Group, Reservation_Type, Special)
);

CREATE TABLE Ticket_Reservation (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Age_Range INT,
Demographic_Group INT,
Reservation_Type INT,
Special INT,
Price DECIMAL(18,2) NOT NULL,
Amount INT NOT NULL,
PRIMARY KEY (ID_Client, Reservation_Date, Age_Range, Demographic_Group, Reservation_Type),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date),
FOREIGN KEY (Age_Range, Demographic_Group, Reservation_Type, Special) REFERENCES Ticket(Age_Range, Demographic_Group, Reservation_Type, Special)
);

CREATE TABLE Vehicle (
ID_Client	CHAR(15),
Reservation_Date	DATETIME,
ID_Vehicle	CHAR(6),
PRIMARY KEY (ID_Client, Reservation_Date, ID_Vehicle),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date) ON DELETE CASCADE
);

CREATE TABLE Setting_Capacity (
Type VARCHAR(30),
Value INT NOT NULL,
PRIMARY KEY (Type)
);