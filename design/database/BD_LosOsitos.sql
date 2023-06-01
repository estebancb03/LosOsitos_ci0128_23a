use LosOsitos

CREATE TABLE Country (
Name VARCHAR(30),
PRIMARY KEY (Name)
);


CREATE TABLE Person (
ID CHAR(15),
Name VARCHAR(15),
LastName1 VARCHAR(15),
LastName2 VARCHAR(15),
Gender INT,
Birth_Date DATE,
Email VARCHAR(50),
Country_Name VARCHAR(30),
PRIMARY KEY (ID),
FOREIGN KEY (Country_Name) REFERENCES Country(Name)
);


CREATE TABLE Client (
ID_Person CHAR(15)
PRIMARY KEY (ID_Person),
FOREIGN KEY (ID_Person) REFERENCES Person(ID)
);


CREATE TABLE Testimony (
ID_Client CHAR(15),
Description VARCHAR(246),
State BIT,
Date DATE,
PRIMARY KEY (ID_Client),
FOREIGN KEY (ID_Client) REFERENCES Client(ID_Person)
);

/*
CREATE TABLE Employee (
ID_Person CHAR(15),
Username VARCHAR(15),
Password VARCHAR(15),
Type INT,
PRIMARY KEY (ID_Person),
FOREIGN KEY (ID_Person) REFERENCES Person(ID)
);
*/

CREATE TABLE Reservation (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Payment_Method INT,
--Payment_Proof VARBINARY(),

PRIMARY KEY (ID_Client, Reservation_Date),
FOREIGN KEY (ID_Client) REFERENCES Client(ID_Person)
);

CREATE TABLE Picnic (
ID_Client CHAR(15),
Reservation_Date DATETIME,
PRIMARY KEY (ID_Client, Reservation_Date),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date)
);

CREATE TABLE Camping (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Start_Date DATE,
End_Date DATE,
Reservation_Method INT,
PRIMARY KEY (ID_Client, Reservation_Date),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date)
);

CREATE TABLE Spot (
Location INT,
Size INT,
PRIMARY KEY (Location)
);

CREATE TABLE Spot_Price (
Currency VARCHAR(15),
Price INT,
Location_Spot INT,
PRIMARY KEY (Currency),
FOREIGN KEY (Location_Spot) REFERENCES Spot(Location)
);

CREATE TABLE Spot_Camping (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Location_Spot INT,
Price DECIMAL(18,2),
PRIMARY KEY (ID_Client, Reservation_Date, Location_Spot),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Camping(ID_Client, Reservation_Date),
FOREIGN KEY (Location_Spot) REFERENCES Spot(Location)
);

CREATE TABLE Service (
Name VARCHAR(30),
PRIMARY KEY (Name)
);

CREATE TABLE Service_Price (
Currency VARCHAR(15),
Price DECIMAL(18,2),
Name_Service VARCHAR(30),
PRIMARY KEY (Currency),
FOREIGN KEY (Name_Service) REFERENCES Service(Name)
);

CREATE TABLE Service_Reservation (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Name_Service VARCHAR(30),
Price DECIMAL(18, 2),
PRIMARY KEY (ID_Client, Reservation_Date, Name_Service),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date),
FOREIGN KEY (Name_Service) REFERENCES Service(Name)
);

CREATE TABLE Ticket (
Age_Range INT,
Demographic_Group INT,
PRIMARY KEY (Age_Range, Demographic_Group)
);

CREATE TABLE Ticket_Price (
Currency VARCHAR(15),
Price INT,
Age_Range INT,
Demographic_Group INT,
PRIMARY KEY (Currency),
FOREIGN KEY (Age_Range, Demographic_Group) REFERENCES Ticket(Age_Range, Demographic_Group)
);

CREATE TABLE Ticket_Reservation (
ID_Client CHAR(15),
Reservation_Date DATETIME,
Age_Range INT,
Demographic_Group INT,
Reservation_Type TINYINT,
Price DECIMAL(18, 2),
Amount INT
PRIMARY KEY (ID_Client, Reservation_Date, Age_Range, Demographic_Group, Reservation_Type),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date),
FOREIGN KEY (Age_Range, Demographic_Group, Reservation_Type) REFERENCES Ticket(Age_Range, Demographic_Group, Reservation_Type)
);

CREATE TABLE Vehicle (
ID_Client	CHAR(15),
Reservation_Date	DATETIME,
ID_Vehicle	CHAR(6),
PRIMARY KEY (ID_Client, Reservation_Date, ID_Vehicle),
FOREIGN KEY (ID_Client, Reservation_Date) REFERENCES Reservation(ID_Client, Reservation_Date)
)
