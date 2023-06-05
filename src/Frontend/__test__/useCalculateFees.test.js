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
});
