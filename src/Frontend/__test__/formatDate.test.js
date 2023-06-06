import {
  formatDateDDMMYYYY,
  formatDateMMDDYYYY,
  formatDateDTDDMMYYYY,
  formatDateDTMMDDYYYY,
  addZerosToDate,
  getHoursMinutesFromISOFormat,
  createHoursWithIntervals,
  changeDateInISOFormat,
  changeHourInISOFormat,
  changeDateInISOFormat2,
  isDateAfterISO8601,
  getDaysDifference,
  formatDateYYYYMMDD,
  getDateRange
} from "../src/helpers/formatDate";

describe('formatDateHelper', () => {
  test("formatDateDDMMYYYY Method that formats the date from mm-dd-yyyy to dd/mm/yy", () => {
    const date = "03-06-2023";
    const expectedDate = "06/03/2023";
    const result = formatDateDDMMYYYY(date);
    expect(result).toEqual(expectedDate);
  });
  test("formatDateDTMMDDYYYY returns a string with the date in the mm-dd-yyyy format", () => {
    const date = "2023-06-03T19:01:54.970Z";
    const expectedDate = "06-03-2023";
    const result = formatDateDTMMDDYYYY(date);
    expect(result).toEqual(expectedDate);
  });

  test("formatDateDTDDMMYYYY returns a string with the date in the mm-dd-yyyy format", () => {
    const date = "2023-06-03T19:01:54.970Z";
    const expectedDate = "03/06/2023";
    const result = formatDateDTDDMMYYYY(date);
    expect(result).toEqual(expectedDate);
  });

  test("addZerosToDate add zeros to the month", () => {
    const date = "3-6-2023";
    const expectedDate = "03-6-2023";
    const result = addZerosToDate(date);
    expect(result).toEqual(expectedDate);
  });

  test("formatDateMMDDYYYY changes / to -", () => {
    const date = new Date("03/06/2023");
    const expectedDate = "3-6-2023";
    const result = formatDateMMDDYYYY(date);
    expect(result).toEqual(expectedDate);
  });

  test("getHoursMinutesFromISOFormat Method that gets the hours and minutes of dates in ISO 8601 format", () => {
    const date = "2023-06-03T19:01:54.970Z";
    const expectedDate = "19:01";
    const result = getHoursMinutesFromISOFormat(date);
    expect(result).toEqual(expectedDate);
  });

  test("createHoursWithIntervals Method that returns an array with the hours in the interval", () => {
    const startHour = 12;
    const endHour = 14;
    const interval = 30;
    const expectedDate = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];
    const result = createHoursWithIntervals(startHour, endHour, interval);
    expect(result).toEqual(expectedDate);
  });

  test("changeDateInISOFormat Method that update the date in a ISO 8601 format", () => {
    const date = "03-06-2023";
    const ISODate = "2019-10-21T19:01:54.970Z";
    const expectedDate = "2023-03-06T19:01:54.970Z";
    const result = changeDateInISOFormat(date, ISODate);
    expect(result).toEqual(expectedDate);
  });

  test("changeDateInISOFormat2 Method that update the date in a ISO 8601 format", () => {
    const date = "03-06-2023";
    const ISODate = "2019-10-21T19:01:54.970Z";
    const expectedDate = "2023-03-05T19:01:54.970Z";
    const result = changeDateInISOFormat2(date, ISODate);
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

  test("formatDateYYYYMMDD format a date from MMDDYYYY to YYYYMMDD format", () => {
    const date = "02-03-2023";
    const expectedResult = "2023/02/03";
    const result = formatDateYYYYMMDD(date);
    expect(result).toEqual(expectedResult);
  });

  test("getDateRange returns array of days between 2 dates", () => {
    const date1 = "02-01-2023";
    const date2 = "02-05-2023";
    const expectedResult = ["2023-02-01", "2023-02-02", "2023-02-03", "2023-02-04", "2023-02-05"];
    const result = getDateRange(date1, date2);
    expect(result).toEqual(expectedResult);
  });

  test("getDateRange returns no dates if the first date is after the second one", () => {
    const date1 = "02-05-2023";
    const date2 = "02-01-2023";
    const expectedResult = [];
    const result = getDateRange(date1, date2);
    expect(result).toEqual(expectedResult);
  })

  test("changeHourInISOFormat Method that update the hours and minutes in a ISO 8601 format", () => {
    const hour = "23:59";
    const ISODate = "2023-09-10T19:01:54.970Z";
    const expectedResult = "2023-09-10T23:59:54.970Z";
    const result = changeHourInISOFormat(hour, ISODate);
    expect(result).toEqual(expectedResult);
  });
});