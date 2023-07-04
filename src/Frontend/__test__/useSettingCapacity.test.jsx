import { renderHook } from "@testing-library/react-hooks";
import useSettingCapacity from "../src/hooks/useSettingCapacity";
import { act } from "react-dom/test-utils";
import { useContext } from "react";

const mockAuthContext = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3MjExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAlA8QbRC5irb905U",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe('useSettingCapacity', () => {
  test('capacityValues should not be empty', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useSettingCapacity());
    const { capacityValues } = result.current;
    expect(capacityValues).not.toBe([]);
  });

    // Sets capacity values filtered
  test('setCapacityValues should not be empty', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useSettingCapacity());
    const { setCapacityValues } = result.current;
    act(() => {
      setCapacityValues([
        {
          Type: "CampingOnline",
          Value: 10
        }
      ]);
    });
    const { capacityValues } = result.current;
    const expectedData = [{
      Type: "CampingOnline",
      Value: 10
    }];
    expect(capacityValues).toEqual(expectedData);
  });
});
