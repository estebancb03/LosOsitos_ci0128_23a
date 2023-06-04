import { renderHook } from "@testing-library/react-hooks";
import useTicket from "../src/hooks/useTicket.jsx";

describe('useTicket', () => {
  test('extractTicketData returns correct data', () => {
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
});
