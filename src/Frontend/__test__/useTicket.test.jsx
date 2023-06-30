import { renderHook } from "@testing-library/react-hooks";
import useTicket from "../src/hooks/useTicket";
import { useContext } from "react";

const mockAuthContext = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3MjExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAlA8QbRC5irb905U",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("useTicket", () => {
  test("extractTicketData returns a string that describes ticket values", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { formatTicket } = result.current;
    const expectedData = "National-Children";
    const ticket = {
      Age_Range: 0,
      Demographic_Group: 0,
      Reservation_Type: 0,
      Special: 0,
      Price: 10,
    };
    const formatTicketResult = formatTicket(ticket);
    expect(formatTicketResult).toEqual(expectedData);
  });

  test("ticketOptions should not be empty", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { ticketOptions } = result.current;
    expect(ticketOptions).toEqual([
      "National-Children",
      "National-Adult",
      "Foreign-Children",
      "Foreign-Adult",
    ]);
  });
});
