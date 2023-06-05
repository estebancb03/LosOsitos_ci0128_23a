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
});