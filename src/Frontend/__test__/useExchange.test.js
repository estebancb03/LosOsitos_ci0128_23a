import { renderHook } from "@testing-library/react-hooks";
import useExchange from "../src/hooks/useExchange";
import { act } from "react-dom/test-utils";

describe('useExchange', () => {
  test('exchange must contain the exchange rates of the currencies', () => {
    const { result } = renderHook(() => useExchange());
    const { exchange } = result.current;
    const expectedData = {
      USD: 537.33,
      CRC: 0.0018622
    };
    expect(exchange).toEqual(expectedData);
  });

  test('setExchange shout modify the exchange rates of the currencies', () => {
    const { result } = renderHook(() => useExchange());
    const { setExchange } = result.current;
    act(() => {
      setExchange({
        USD: 536.84,
        CRC: 0.0019
      });
    });
    const { exchange } = result.current;
    const expectedData = {
      USD: 536.84,
      CRC: 0.0019
    };
    expect(exchange).toEqual(expectedData);
  });
});