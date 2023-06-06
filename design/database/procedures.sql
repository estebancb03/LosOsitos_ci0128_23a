-- Procedure 1

GO
CREATE PROCEDURE ReservationBetweenDates(
@InitialDate AS DATE = NULL,
@EndingDate AS DATE = NULL)
AS
BEGIN
	SELECT ID_Client, Reservation_Date FROM Camping WHERE Start_Date BETWEEN @InitialDate AND @EndingDate OR End_Date BETWEEN @InitialDate AND @EndingDate
	UNION
	SELECT ID_Client, Reservation_Date FROM Picnic WHERE Picnic_Date BETWEEN @InitialDate AND @EndingDate
END;

-- Procedure 2

GO
CREATE PROCEDURE ReservationInADate(
@DateParam AS DATE = NULL)
AS
BEGIN
	SELECT ID_Client, Reservation_Date FROM Camping WHERE @DateParam BETWEEN Start_Date AND End_Date
	UNION
	SELECT ID_Client, Reservation_Date FROM Picnic WHERE Picnic_Date = @DateParam
END;


-- Procedure 3

GO
CREATE PROCEDURE ReservationsByVisitor(
    @start_date AS DATE,
    @end_date AS DATE
)
AS
BEGIN
	SELECT 
		Country,
		Date,
		CASE WHEN Reservation_Type = 0 THEN 'Picnic' ELSE 'Camping' END AS 'Reservation_Type',
		CASE WHEN Demographic_Group = 0 THEN 'Resident' ELSE 'Foreigner' END AS 'Demographic_Group',
		CASE WHEN Special = 0 THEN 'Yes' ELSE 'No' END AS 'Special',
		CASE WHEN Age_Range = 0 THEN 'Child' ELSE 'Adult' END AS 'Age_Range',
		Amount
	FROM (
		SELECT CASE WHEN Person.Country_Name = 'Costa Rica' THEN Person.State ELSE Person.Country_Name END AS 'Country',
		Ticket_Reservation.Reservation_Type, Camping.Start_Date AS 'Date', Ticket_Reservation.Demographic_Group, Ticket_Reservation.Special, Ticket_Reservation.Age_Range, Ticket_Reservation.Amount
		FROM Person JOIN Ticket_Reservation ON Person.ID = Ticket_Reservation.ID_Client
		JOIN Camping ON Ticket_Reservation.ID_Client = Camping.ID_Client AND Ticket_Reservation.Reservation_Date = Camping.Reservation_Date
		WHERE Camping.Start_Date BETWEEN @start_date AND @end_date AND Ticket_Reservation.Reservation_Type = 1
		UNION
		SELECT CASE WHEN Person.Country_Name = 'Costa Rica' THEN Person.State ELSE Person.Country_Name END AS 'Country',
		Ticket_Reservation.Reservation_Type, Picnic.Picnic_Date AS 'Date', Ticket_Reservation.Demographic_Group, Ticket_Reservation.Special, Ticket_Reservation.Age_Range, Ticket_Reservation.Amount
		FROM Person JOIN Ticket_Reservation ON Person.ID = Ticket_Reservation.ID_Client
		JOIN Picnic ON Ticket_Reservation.ID_Client = Picnic.ID_Client AND Ticket_Reservation.Reservation_Date = Picnic.Reservation_Date
		WHERE Picnic.Picnic_Date BETWEEN @start_date AND @end_date AND Ticket_Reservation.Reservation_Type = 0
	) AS T
	ORDER BY Date
END


-- Procedure 4

GO 
CREATE PROCEDURE TotalPriceReservaiton(
	@Date AS DATE,
	@Client AS CHAR(15)
)
AS
BEGIN
	SELECT Currency, SUM(Price) AS 'Total Price' FROM
	(
	SELECT Ticket.Currency, (Ticket_Reservation.Price * Ticket_Reservation.Amount) AS 'Price'
	FROM Ticket_Reservation JOIN Ticket ON Ticket.Age_Range = Ticket_Reservation.Age_Range AND Ticket.Demographic_Group = Ticket_Reservation.Demographic_Group AND
	Ticket.Reservation_Type = Ticket_Reservation.Reservation_Type AND Ticket.Special = Ticket_Reservation.Special
	WHERE ID_Client = @Client AND Reservation_Date = @Date
	UNION
	SELECT Service_Reservation.Currency, (Service_Reservation.Price * Service_Reservation.Quantity) AS 'Price'
	FROM Service_Reservation
	WHERE ID_Client = @Client AND Reservation_Date = @Date
	UNION
	SELECT Spot_Camping.Currency, Spot_Camping.Price AS 'Price'
	FROM Spot_Camping
	WHERE ID_Client = @Client AND Reservation_Date = @Date
	) AS Total
	GROUP BY Currency
END

-- Procedure 5

GO
CREATE PROCEDURE PeopleInReservation(
	@Date AS DATETIME,
	@Client AS CHAR(15)
)AS 
BEGIN
	SELECT SUM(Amount) AS 'Amount of people'
	FROM Ticket_Reservation
	WHERE ID_Client = @Client AND Reservation_Date = @Date
END


GO
CREATE PROCEDURE DailyIncome(
	@start_date AS DATE,
	@end_date AS DATE
)AS 
BEGIN
	SELECT Reservation_Date, Currency, SUM(Price) AS 'Total Price' FROM
	(
	SELECT Ticket.Currency, (Ticket_Reservation.Price * Ticket_Reservation.Amount) AS 'Price', Reservation_Date
	FROM Ticket_Reservation JOIN Ticket ON Ticket.Age_Range = Ticket_Reservation.Age_Range AND Ticket.Demographic_Group = Ticket_Reservation.Demographic_Group AND
	Ticket.Reservation_Type = Ticket_Reservation.Reservation_Type AND Ticket.Special = Ticket_Reservation.Special
	WHERE Reservation_Date BETWEEN @start_date AND @end_date
	UNION
	SELECT Service_Reservation.Currency, (Service_Reservation.Price * Service_Reservation.Quantity) AS 'Price', Reservation_Date
	FROM Service_Reservation
	WHERE Reservation_Date BETWEEN @start_date AND @end_date
	UNION
	SELECT Spot_Camping.Currency, Spot_Camping.Price AS 'Price', Reservation_Date
	FROM Spot_Camping
	WHERE Reservation_Date BETWEEN @start_date AND @end_date
	) AS Total
	GROUP BY Currency, Reservation_Date
END

-- Procedure 6

GO
CREATE PROCEDURE RemainingPicnicCapacity(
	@date AS DATE
)AS 
BEGIN
	DECLARE @onlineCapacity AS INT
	DECLARE @onSiteCapacity AS INT

	SELECT @onlineCapacity = Value FROM Setting_Capacity WHERE Type = 'PicnicOnline'
	SELECT @onSiteCapacity = Value FROM Setting_Capacity WHERE Type = 'PicnicOnSite'
	SELECT MIN(Remaining_Capacity) AS 'Remaining_Capacity', Reservation_Method FROM
		(
		SELECT ((CASE WHEN Reservation_Method = 1 THEN @onSiteCapacity ELSE @onlineCapacity END) - SUM(Amount)) AS 'Remaining_Capacity', Reservation_Method FROM
		(
		SELECT Amount, Reservation_Method
		FROM Ticket_Reservation JOIN Picnic ON Ticket_Reservation.ID_Client = Picnic.ID_Client AND Ticket_Reservation.Reservation_Date = Picnic.Reservation_Date
		JOIN Reservation ON Reservation.ID_Client = Picnic.ID_Client AND Reservation.Reservation_Date = Picnic.Reservation_Date
		WHERE Reservation_Type = 0 AND Picnic_Date >= @date AND Picnic_Date < DATEADD(DAY, 1, @date)
		) AS T
		GROUP BY Reservation_Method
		UNION
		SELECT @onSiteCapacity, 1
		UNION
		SELECT @onlineCapacity, 0) AS S
	GROUP BY Reservation_Method
END

-- Procedure 7

GO
CREATE PROCEDURE RemainingCampingCapacity(
	@date AS DATE
)AS 
BEGIN
	DECLARE @onlineCapacity AS INT
	DECLARE @onSiteCapacity AS INT

	SELECT @onlineCapacity = Value FROM Setting_Capacity WHERE Type = 'CampingOnline'
	SELECT @onSiteCapacity = Value FROM Setting_Capacity WHERE Type = 'CampingOnSite'

	SELECT MIN(Remaining_Capacity) AS 'Remaining_Capacity', Reservation_Method FROM
	(
		SELECT ((CASE WHEN Reservation_Method = 1 THEN @onSiteCapacity ELSE @onlineCapacity END) - SUM(Amount)) AS 'Remaining_Capacity', Reservation_Method FROM
		(
		SELECT Amount, Reservation_Method
		FROM Ticket_Reservation JOIN Camping ON Ticket_Reservation.ID_Client = Camping.ID_Client AND Camping.Reservation_Date = Ticket_Reservation.Reservation_Date
		JOIN Reservation ON Reservation.ID_Client = Ticket_Reservation.ID_Client AND Reservation.Reservation_Date = Ticket_Reservation.Reservation_Date
		WHERE Reservation_Type = 1 AND @date BETWEEN Camping.Start_Date AND Camping.End_Date
		) AS T
		GROUP BY Reservation_Method
		UNION
		SELECT @onSiteCapacity, 1
		UNION
		SELECT @onlineCapacity, 0
	) AS S
	GROUP BY Reservation_Method
END
