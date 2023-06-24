import { renderHook } from "@testing-library/react-hooks";
import useCalculateFees from "../src/hooks/useCalculateFees";
import useExchange from "../src/hooks/useExchange";
import { useContext } from "react";

const mockAuthContext = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3MjExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAlA8QbRC5irb905U",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe('useCalculateFees', () => {
  test("calculatesTicketsFee returns an array with the prices in CRC and USD of the reservation tickets", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useCalculateFees({
      Start_Date: "2023-06-28T00:00:00.000Z",
      End_Date: "2023-06-30T00:00:00.000Z",
      Tickets: [
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 0,
          Demographic_Group: 0,
          Reservation_Type: 1,
          Special: 0,
          Price: 3390,
          Amount: 4
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 0,
          Demographic_Group: 1,
          Reservation_Type: 1,
          Special: 0,
          Price: 10.17,
          Amount: 4
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 1,
          Demographic_Group: 0,
          Reservation_Type: 1,
          Special: 0,
          Price: 4520,
          Amount: 1
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 1,
          Demographic_Group: 1,
          Reservation_Type: 1,
          Special: 0,
          Price: 18.08,
          Amount: 5
        }
      ]
    }));
    const { calculatesTicketsFee } = result.current;
    const [CRCFee, USDFee] = calculatesTicketsFee();

    expect(typeof CRCFee).toBe("number");
    expect(typeof USDFee).toBe("number");
  });

  test("calculateSpotsFee returns an array with the prices in CRC and USD of the reservation spots", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useCalculateFees({
      Start_Date: "2023-06-28T00:00:00.000Z",
      End_Date: "2023-06-30T00:00:00.000Z",
      Spots: [
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Location_Spot: 1,
          Price: 10000,
          Currency: "CRC"
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Location_Spot: 3,
          Price: 7500,
          Currency: "CRC"
        }
      ]
    }));
    const { calculateSpotsFee } = result.current;
    const [CRCFee, USDFee] = calculateSpotsFee();

    expect(typeof CRCFee).toBe("number");
    expect(typeof USDFee).toBe("number");
  });

  test("calculateServicesFee returns an array with the prices in CRC and USD of the reservation services", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useCalculateFees({
      Start_Date: "2023-06-28T00:00:00.000Z",
      End_Date: "2023-06-30T00:00:00.000Z",
      Services: [
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Name_Service: "Hiking",
          Price: 2000,
          Quantity: 1,
          Currency: "CRC"
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Name_Service: "Kayak",
          Price: 7000,
          Quantity: 1,
          Currency: "CRC"
        }
      ]
    }));
    const { calculateServicesFee } = result.current;
    const [CRCFee, USDFee] = calculateServicesFee();

    expect(typeof CRCFee).toBe("number");
    expect(typeof USDFee).toBe("number");
  });

  test("applyExchange ", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useCalculateFees({
      Start_Date: "2023-06-28T00:00:00.000Z",
      End_Date: "2023-06-30T00:00:00.000Z",
      Tickets: [
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 0,
          Demographic_Group: 0,
          Reservation_Type: 1,
          Special: 0,
          Price: 3390,
          Amount: 4
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 0,
          Demographic_Group: 1,
          Reservation_Type: 1,
          Special: 0,
          Price: 10.17,
          Amount: 4
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 1,
          Demographic_Group: 0,
          Reservation_Type: 1,
          Special: 0,
          Price: 4520,
          Amount: 1
        },
        {
          ID_Client: "1111111",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Age_Range: 1,
          Demographic_Group: 1,
          Reservation_Type: 1,
          Special: 0,
          Price: 18.08,
          Amount: 5
        }
      ]
    }));
  
    const { applyExchange } = result.current;

    const nationalFee = {fee: 5000}
    const foreignFee = {fee: 9}

    const [CRCFee, USDFee] = applyExchange(nationalFee, foreignFee);

    expect(typeof CRCFee).toBe("number");
    expect(typeof USDFee).toBe("number");
  });

});
