import { renderHook } from "@testing-library/react-hooks";
import useReservations from "../src/hooks/useReservations";

describe('useReservations', () => {
  test('createReservation returns a reservation object with default values', () => {
    const { result } = renderHook(() => useReservations());
    const { createReservation } = result.current;
    const expectedReservation = {
      ID: "",
      Name: "",
      LastName1: "",
      LastName2: "",
      Gender: 0,
      Email: "",
      Country_Name: "Argentina",
      Birth_Date: expect.any(String),
      State: "",
      Reservation_Method: 1,
      Status: 1,
      Payment_Method: 2,
      Reservation_Type: 0,
      Reservation_Date: expect.any(String),
      Picnic_Date: expect.any(String),
      Start_Date: expect.any(String),
      End_Date: expect.any(String),
      NewSpots: [],
      NewTickets: [],
      NewServices: [],
      NewVehicles: []
    };
    const reservation = createReservation();
    expect(reservation).toEqual(expectedReservation);
  });
});