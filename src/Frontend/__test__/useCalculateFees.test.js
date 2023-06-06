import { renderHook } from "@testing-library/react-hooks";
import useCalculateFees from "../src/hooks/useCalculateFees";

describe('useCalculateFees', () => {
  test("calculatesTicketsFee returns an array with the prices in CRC and USD of the reservation tickets", () => {
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
    const expectedResult = [265409.58436258184, 494.1835542404109];
    const resultTicketsFee = calculatesTicketsFee();
    expect(resultTicketsFee).toEqual(expectedResult);
  });

  test("calculateSpotsFee returns an array with the prices in CRC and USD of the reservation spots", () => {
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
    const expectedResult = [52500, 97.70532075261012];
    const resultSpotsFee = calculateSpotsFee();
    expect(resultSpotsFee).toEqual(expectedResult);
  });

  test("calculateServicesFee returns an array with the prices in CRC and USD of the reservation services", () => {
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
    const expectedResult = [9000, 16.749483557590306];
    const resultTicketsFee = calculateServicesFee();
    expect(resultTicketsFee).toEqual(expectedResult);
  });

  test("applyExchange ", () => {
    const { result } = renderHook(() => useCalculateFees({
      exchange: {
        CRC: 0.0019,
        USD: 536.52
      }
    }));
  
    const { applyExchange } = result.current;

    const nationalFee = {fee: 5000}
    const foreignFee = {fee: 9}

    const expectedResult = [9832.993233809473, 18.305268643105727];
    const resultTicketsFee = applyExchange(nationalFee, foreignFee);
    expect(resultTicketsFee).toEqual(expectedResult);
  });
});
