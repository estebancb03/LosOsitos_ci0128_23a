import { renderHook } from "@testing-library/react-hooks";
import useSpot from "../src/hooks/useSpot";

describe('useSpot', () => {
  test('spots should not be empty', () => {
    const { result } = renderHook(() => useSpot());
    const { spots } = result.current;
    expect(spots).not.toBe([]);
  });

  test('locations should not be empty', () => {
    const { result } = renderHook(() => useSpot());
    const { locations } = result.current;
    expect(locations).not.toBe([]);
  });

  test('sizes should not be empty', () => {
    const { result } = renderHook(() => useSpot());
    const { sizes } = result.current;
    expect(sizes).not.toBe([]);
  });

  test('spotPrices should not be empty', () => {
    const { result } = renderHook(() => useSpot());
    const { spotsPrices } = result.current;
    expect(spotsPrices).not.toBe([]);
  });

  test('formatSpotSize returns the name of the size', () => {
    const { result } = renderHook(() => useSpot());
    const { sizes, formatSpotSize } = result.current;
    const formatedResult = formatSpotSize(121);
    expect(formatedResult).not.toEqual("Small");
  });
});