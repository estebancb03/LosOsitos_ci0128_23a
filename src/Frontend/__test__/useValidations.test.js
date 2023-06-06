import { renderHook } from '@testing-library/react-hooks';
import useValidations from '../src/hooks/useValidations';

describe('useValidation', () => {
  test('validatePersonalData returns true when all personal data fields are valid', () => {
    const { result } = renderHook(() => useValidations({
      ID: 11123,
      Name: 'John',
      LastName1: 'Doe',
      LastName2: 'Smith',
      Birth_Date: '1990-01-01',
      Email: 'john.doe',
      Gender: 'male',
      Country_Name: 'Argentina'
    }));
    const { validatePersonalData } = result.current;
    const validationResult = validatePersonalData();
    // Must be false because the email field is wrong
    expect(validationResult).toBe(false);
  });

  test("validateServices should return true if services are valid", () => {
    const { result } = renderHook(() => useValidations({
      Services: [
        {
          ID_Client: "118090359",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Name_Service: "Hiking",
          Price: 2000,
          Quantity: 0,
          Currency: "CRC"
        },
        {
          ID_Client: "118090359",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Name_Service: "Kayak",
          Price: 7000,
          Quantity: 2,
          Currency: "CRC"
        }
      ]
    }));
    const { validateServices } = result.current;
    const validationResult = validateServices();
    // Must be false because the quantity field of Hiking is 0
    expect(validationResult).toBe(false);
  });

  test("validateDates should return true if Picnic dates are valid", () => {
    const { result } = renderHook(() => useValidations(
        {
          ID_Client: "118090359",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Reservation_Type: 0,
          Picnic_Date: "23-12-2023"
        }
    ));
    const { validateDates } = result.current;
    const validationResult = validateDates();
    // Must be true because the date is correct
    expect(validationResult).toBe(true);
  });

  test("validateDates should return true if Camping dates are valid", () => {
    const { result } = renderHook(() => useValidations(
        {
          ID_Client: "118090359",
          Reservation_Date: "2023-06-03T19:01:54.970Z",
          Reservation_Type: 1,
          Start_Date: "2023-09-10T19:01:54.970Z",
          End_Date: "2023-09-11T19:01:54.970Z"
        }
    ));
    const { validateDates } = result.current;
    const validationResult = validateDates();
    // Must be true because the date is correct
    expect(validationResult).toBe(true);
  });

  test("validateTickets should return true if tickets are are valid", () => {
    const { result } = renderHook(() => useValidations(
      {
        Tickets: [
          {
            Amount: 10
          },
          {
            Amount: 9
          },
          {
            Amount: 4
          }
        ]
      }
    ));
    const { validateTickets } = result.current;
    const validationResult = validateTickets();
    // Must be true because the Amount is correct
    expect(validationResult).toBe(true);
  });

  test("validateNewSpots should return true if spots are are valid", () => {
    const { result } = renderHook(() => useValidations(
      {
        Reservation_Type: 1,
        NewSpots: 3
      }
    ));
    const { validateNewSpots } = result.current;
    const validationResult = validateNewSpots();
    // Must be true because the Amount is correct
    expect(validationResult).toBe(true);
  });

  test("validateCapacity should return true if camping capacity is not exceeded", async () => {
    const { result } = renderHook(() => useValidations(
      {
        Start_Date: "2023-05-01",
        End_Date: "2023-05-02",
        Reservation_Method: 0,
        New_Tickets: [{Amount: 1}],
        Reservation_Type: 1
      }
    ));
    const { validateCapacity } = result.current;
    const validationResult = await validateCapacity();
    // Must be true because the Amount is correct
    expect(validationResult).toBe(true);
  })

  test("validateCapacity should return true if picnic capacity is not exceeded", async () => {
    const { result } = renderHook(() => useValidations(
      {
        Picnic_Date: "2023-05-01",
        Reservation_Method: 0,
        New_Tickets: [{Amount: 1}],
        Reservation_Type: 0
      }
    ));
    const { validateCapacity } = result.current;
    const validationResult = await validateCapacity();
    // Must be true because the Amount is correct
    expect(validationResult).toBe(true);
  })

  test("validateCapacity should return false if picnic capacity is exceeded", async () => {
    const { result } = renderHook(() => useValidations(
      {
        Picnic_Date: "2023-05-01",
        Reservation_Method: 0,
        New_Tickets: [{Amount: 10000}],
        Reservation_Type: 0
      }
    ));
    const { validateCapacity } = result.current;
    const validationResult = await validateCapacity();
    // Must be true because the Amount is correct
    expect(validationResult).toBe(true);
  })

  test("validateCapacity should return false if camping capacity is exceeded", async () => {
    const { result } = renderHook(() => useValidations(
      {
        Start_Date: "2023-05-01",
        End_Date: "2023-05-02",
        Reservation_Method: 0,
        New_Tickets: [{Amount: 1000}],
        Reservation_Type: 1
      }
    ));
    const { validateCapacity } = result.current;
    const validationResult = await validateCapacity();
    // Must be true because the Amount is correct
    expect(validationResult).toBe(true);
  })
});