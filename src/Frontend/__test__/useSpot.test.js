import { renderHook } from "@testing-library/react-hooks";
import useSpot from "../src/hooks/useSpot";
import { useContext } from "react";

const mockAuthContext = {
  token: `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAg
    ICAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3M
    jExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAl
    A8QbRC5irb905U
  `,
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe('useSpot', () => {
  test('spots should not be empty', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useSpot());
    const { spots } = result.current;
    expect(spots).not.toBe([]);
  });

  test('locations should not be empty', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useSpot());
    const { locations } = result.current;
    expect(locations).not.toBe([]);
  });

  test('sizes should not be empty', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useSpot());
    const { sizes } = result.current;
    expect(sizes).not.toBe([]);
  });

  test('spotPrices should not be empty', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useSpot());
    const { spotsPrices } = result.current;
    expect(spotsPrices).not.toBe([]);
  });

  test('formatSpotSize returns the name of the size', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useSpot());
    const { sizes, formatSpotSize } = result.current;
    const formatedResult = formatSpotSize(121);
    expect(formatedResult).not.toEqual("Small");
  });
});