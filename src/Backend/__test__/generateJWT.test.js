import jwt from 'jsonwebtoken';
import generateJWT from '../src/helpers/generateJWT.js';

describe('generateJWT', () => {
  test('generate a valid JWT token', () => {
    const user = {
      ID_Person: 123,
      Username: 'user',
      Type: 'admin'
    };
    const token = generateJWT(user);
    const decoded = jwt.verify(token, 'asojunquillal-LosOsitos-ci0128-I-2023');
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    expect(decoded.ID).toBe(user.ID_Person);
    expect(decoded.Username).toBe(user.Username);
    expect(decoded.Type).toBe(user.Type);
  });
});
