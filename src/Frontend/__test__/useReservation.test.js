import { renderHook } from "@testing-library/react-hooks";
import useReservations from "../src/hooks/useReservations";
import { useContext } from "react";

const mockAuthContext = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3MjExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAlA8QbRC5irb905U",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe('useReservations', () => {
  test('createReservation returns a reservation object with default values', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
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