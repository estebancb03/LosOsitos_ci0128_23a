CREATE TRIGGER UpdateTicketGreaterThanZero
ON Ticket INSTEAD OF UPDATE
AS
    DECLARE @priceVar DECIMAL(18,2)
    DECLARE @ageVar INT
    DECLARE @demVar INT
    DECLARE @resVar INT
    DECLARE @speVar INT

    SELECT @priceVar = Price, @ageVar = Age_Range, @demVar = Demographic_Group,@resVar = Reservation_Type, @speVar = Special
    FROM inserted
    IF @priceVar > 0 
    BEGIN
        UPDATE Ticket 
        SET Price = @priceVar 
        WHERE Age_Range = @ageVar AND Demographic_Group = @demVar AND Reservation_Type = @resVar AND Special = @speVar
    END