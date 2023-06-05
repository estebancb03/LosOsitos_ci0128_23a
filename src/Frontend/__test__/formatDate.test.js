import {
  formatDateDTMMDDYYYY,
  isDateAfterISO8601,
  getDaysDifference
} from "../src/helpers/formatDate";

describe('formatDateHelper', () => {
  test("formatDateDTMMDDYYYY returns a string with the date in the mm-dd-yyyy format", () => {
    const date = "2023-06-03T19:01:54.970Z";
    const expectedDate = "06-03-2023";
    const result = formatDateDTMMDDYYYY(date);
    expect(result).toEqual(expectedDate);
  });

  test("isDateAfterISO8601 should return true if the second date is greater than the first", () => {
    const date1 = "2023-09-10T19:01:54.970Z";
    const date2 = "2023-09-11T19:01:54.970Z";
    const result = isDateAfterISO8601(date1, date2);
    expect(result).toBe(true);
  });

  test("getDaysDifference returns the days between two days counting the dates entered", () => {
    const date1 = "2023-01-10T19:01:54.970Z";
    const date2 = "2023-01-20T19:01:54.970Z";
    const expectedResult = 11;
    const result = getDaysDifference(date1, date2);
    expect(result).toEqual(expectedResult);
  });
});