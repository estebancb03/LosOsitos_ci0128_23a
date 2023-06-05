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
});