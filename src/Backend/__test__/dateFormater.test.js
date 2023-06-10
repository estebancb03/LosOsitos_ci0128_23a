import {
  formatDateDTDDMMYYYY,
  formatDateDTMMDDYYYY,
} from "../src/helpers/dateFormater";

it("test_valid_date_string_input", () => {
  const unformatedDate = "2022-01-01T00:00:00.000Z";
  const expectedOutput = "01/01/2022";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_valid_date_object_input", () => {
  const unformatedDate = new Date("2022-01-01T00:00:00.000Z");
  const expectedOutput = "01/01/2022";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_null_input", () => {
  const unformatedDate = null;
  const expectedOutput = undefined;
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_undefined_input", () => {
  const unformatedDate = undefined;
  const expectedOutput = undefined;
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_date_object_with_timezone_offset", () => {
  const unformatedDate = "2022-01-01T00:00:00-05:00";
  const expectedOutput = "01/01/2022";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedOutput);
});
it("test_leap_year", () => {
  const unformatedDate = "2020-02-29T00:00:00Z";
  const expectedOutput = "29/02/2020";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_date_format", () => {
  const unformatedDate = "2022-12-31T00:00:00Z";
  const expectedOutput = "31/12/2022";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_timezone_differences", () => {
  const unformatedDate = "2022-01-01T00:00:00-05:00";
  const expectedDate = "01/01/2022";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedDate);
});

it("test_daylight_saving_time", () => {
  const unformatedDate = "2022-03-13T02:30:00Z";
  const expectedDate = "13/03/2022";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedDate);
});

it("test_localization", () => {
  const unformatedDate = "2022-06-01T00:00:00Z";
  const expectedDate = "01/06/2022";
  expect(formatDateDTDDMMYYYY(unformatedDate)).toEqual(expectedDate);
});

it("test_valid_date_string_input", () => {
  const unformatedDate = "2022-01-01";
  const expectedOutput = "12-31-2021";
  expect(formatDateDTMMDDYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_future_date_input", () => {
  const unformatedDate = "2023-12-31";
  const expectedOutput = "12-30-2023";
  expect(formatDateDTMMDDYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_date_before_1900_input", () => {
  const unformatedDate = "1899-12-31";
  const expectedOutput = "12-30-1899";
  expect(formatDateDTMMDDYYYY(unformatedDate)).toEqual(expectedOutput);
});

it("test_does_not_modify_input", () => {
  const unformatedDate = "2022-01-01";
  const originalDate = new Date(unformatedDate);
  formatDateDTMMDDYYYY(unformatedDate);
  expect(originalDate).toEqual(new Date(unformatedDate));
});

it("test_returns_string", () => {
  const unformatedDate = "2022-01-01";
  expect(typeof formatDateDTMMDDYYYY(unformatedDate)).toBe("string");
});
