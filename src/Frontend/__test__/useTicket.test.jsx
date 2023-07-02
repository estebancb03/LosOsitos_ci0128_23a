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
    const expectedData = "National Children (7-12 years)";
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
      "National Children (0-6 years)",
      "National Children (7-12 years)",
      "National Adult",
      "National Senior Citysen",
      "Foreign Children (0-6 years)",
      "Foreign Children (7-12 years)",
      "Foreign Adult",
      "Foreign Senior Citysen",
    ]);
  });
  test("addTicket should return a new ticketObject with the new ticket posted", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { addTicket } = result.current;
    const ticketsObject = {
      NC06: 0,
      NC712: 0,
      NA: 0,
      NSC: 0,
      FC06: 0,
      FC712: 0,
      FA: 0,
      FSC: 0,
    };
    const expectedTicketsObject = {
      NC06: 0,
      NC712: 0,
      NA: 0,
      NSC: 0,
      FC06: 1,
      FC712: 0,
      FA: 0,
      FSC: 0,
    };
    const resultTicketsObject = addTicket(
      "Foreign Children (0-6 years)",
      ticketsObject
    );
    expect(resultTicketsObject).toEqual(expectedTicketsObject);
  });

  test("addTicket should not return the same ticketsObject", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { addTicket } = result.current;
    const ticketsObject = {
      NC06: 0,
      NC712: 0,
      NA: 0,
      NSC: 0,
      FC06: 0,
      FC712: 0,
      FA: 0,
      FSC: 0,
    };
    const resultTicketsObject = addTicket(
      "Foreign Children (0-6 years)",
      ticketsObject
    );
    expect(resultTicketsObject).not.toEqual(ticketsObject);
  });

  test("deleteTicket should return a new ticketObject without the ticket to delete", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { deleteTicket } = result.current;
    const ticketsObject = {
      NC06: 0,
      NC712: 0,
      NA: 0,
      NSC: 5,
      FC06: 0,
      FC712: 0,
      FA: 0,
      FSC: 0,
    };
    const expectedTicketsObject = {
      NC06: 0,
      NC712: 0,
      NA: 0,
      NSC: 4,
      FC06: 0,
      FC712: 0,
      FA: 0,
      FSC: 0,
    };
    const resultTicketsObject = deleteTicket(
      "National Senior Citysen",
      ticketsObject
    );
    expect(resultTicketsObject).toEqual(expectedTicketsObject);
  });

  test("deleteTicket should not return the same ticketsObject", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { deleteTicket } = result.current;
    const ticketsObject = {
      NC06: 0,
      NC712: 0,
      NA: 0,
      NSC: 5,
      FC06: 0,
      FC712: 0,
      FA: 0,
      FSC: 0,
    };
    const resultTicketsObject = deleteTicket(
      "National Senior Citysen",
      ticketsObject
    );
    expect(resultTicketsObject).not.toEqual(ticketsObject);
  });

  test("getTicketQuantity should return a number", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { getTicketQuantity } = result.current;
    const ticketsObject = {
      NC06: 0,
      NC712: 1,
      NA: 0,
      NSC: 3,
      FC06: 0,
      FC712: 0,
      FA: 2,
      FSC: 0,
    };
    const expectedResult = "number";
    const resultTicketsObject = getTicketQuantity(
      "Foreign Adult",
      ticketsObject
    );
    expect(typeof resultTicketsObject).toEqual(expectedResult);
  });

  test("getTicketQuantity should return the quantity of one ticket type", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { getTicketQuantity } = result.current;
    const ticketsObject = {
      NC06: 0,
      NC712: 1,
      NA: 0,
      NSC: 3,
      FC06: 0,
      FC712: 0,
      FA: 2,
      FSC: 0,
    };
    const expectedResult = 2;
    const resultTicketsObject = getTicketQuantity(
      "Foreign Adult",
      ticketsObject
    );
    expect(resultTicketsObject).toEqual(expectedResult);
  });

  test("getTicketCurrency should return $ if its a foreign ticket", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { getTicketCurrency } = result.current;
    const ticket = {
      Age_Range: 0,
      Demographic_Group: 1,
      Reservation_Type: 0,
      Special: 0,
      Price: 100,
    };
    const expectedResult = "$";
    const resultTicketsObject = getTicketCurrency(ticket);
    expect(resultTicketsObject).toEqual(expectedResult);
  });

  test("getTicketCurrency should return ₡ if its a national ticket", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useTicket());
    const { getTicketCurrency } = result.current;
    const ticket = {
      Age_Range: 0,
      Demographic_Group: 0,
      Reservation_Type: 0,
      Special: 0,
      Price: 100,
    };
    const expectedResult = "₡";
    const resultTicketsObject = getTicketCurrency(ticket);
    expect(resultTicketsObject).toEqual(expectedResult);
  });
});
