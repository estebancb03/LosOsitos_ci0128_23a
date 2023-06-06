import { renderHook } from "@testing-library/react-hooks";
import useTicket from "../src/hooks/useTicket";

describe('useTicket', () => {
  test('extractTicketData returns a string that describes ticket values', () => {
    const { result } = renderHook(() => useTicket());
    const { formatTicket } = result.current;
    const expectedData = 'National-Children';
    const ticket = {
      Age_Range: 0,
      Demographic_Group: 0,
      Reservation_Type: 0,
      Special: 0,
      Price: 10
    };
    const formatTicketResult = formatTicket(ticket);
    expect(formatTicketResult).toEqual(expectedData);
  });

  test('ticketOptions should not be empty', () => {
  const { result } = renderHook(() => useTicket());
  const { ticketOptions } = result.current;
  expect(ticketOptions).toEqual([
      "National-Children",
      "National-Adult",
      "Foreign-Children",
      "Foreign-Adult"
  ]);
  });
});