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
});