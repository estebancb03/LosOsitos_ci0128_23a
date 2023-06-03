const { isDateAfterISO8601 } = require("../src/helpers/formatDate.js");

/**it("test_modal_display", () => {
        // Render the component
        const { getByText } = render(<CreateReservation />);
        // Check that the Modal component is displayed
        expect(getByText("Create Reservation")).toBeInTheDocument();
        // Check that all necessary components are displayed
        expect(getByText("Tickets")).toBeInTheDocument();
        expect(getByText("Services")).toBeInTheDocument();
        expect(getByText("Vehicles")).toBeInTheDocument();
    });**/

it("test_valid_dates_are_after_each_other", () => {
  expect(
    isDateAfterISO8601("2022-01-01T00:00:00Z", "2021-12-31T23:59:59Z")
  ).toBe(true);
});

it("test_first_date_is_after_second_date", () => {
  expect(
    isDateAfterISO8601("2021-12-31T23:59:59Z", "2022-01-01T00:00:00Z")
  ).toBe(false);
});

it("test_one_or_both_arguments_are_null_or_undefined", () => {
  expect(isDateAfterISO8601(null, "2022-01-01T00:00:00Z")).toBe(false);
  expect(isDateAfterISO8601(undefined, "2022-01-01T00:00:00Z")).toBe(false);
  expect(isDateAfterISO8601("2022-01-01T00:00:00Z", null)).toBe(false);
  expect(isDateAfterISO8601("2022-01-01T00:00:00Z", undefined)).toBe(false);
  expect(isDateAfterISO8601(null, null)).toBe(false);
  expect(isDateAfterISO8601(undefined, undefined)).toBe(false);
});

it("test_one_or_both_arguments_are_not_valid_ISO8601_dates", () => {
  expect(isDateAfterISO8601("not a date", "2022-01-01T00:00:00Z")).toBe(false);
  expect(isDateAfterISO8601("2022-01-01T00:00:00Z", "not a date")).toBe(false);
  expect(isDateAfterISO8601("not a date", "not a date")).toBe(false);
});

it("test_dates_are_the_same", () => {
  expect(
    isDateAfterISO8601("2022-01-01T00:00:00Z", "2022-01-01T00:00:00Z")
  ).toBe(false);
});
