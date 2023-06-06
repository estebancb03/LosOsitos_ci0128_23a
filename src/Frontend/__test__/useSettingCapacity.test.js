import { renderHook } from "@testing-library/react-hooks";
import useSettingCapacity from "../src/hooks/useSettingCapacity";
import { act } from "react-dom/test-utils";

describe('useSettingCapacity', () => {
  test('capacityValues should not be empty', () => {
    const { result } = renderHook(() => useSettingCapacity());
    const { capacityValues } = result.current;
    expect(capacityValues).not.toBe([]);
  });

    // Sets capacity values filtered
  test('setCapacityValues should not be empty', () => {
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
