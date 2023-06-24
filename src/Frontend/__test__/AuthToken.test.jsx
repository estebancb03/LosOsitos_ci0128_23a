import AuthToken from "../src/config/AuthToken";
import AxiosClient from "../src/config/AxiosClient";

describe('AuthToken', () => {
  test('Should add an Authorization header to AxiosClient', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjExODA5MDM1OSAgICAgICIsIlVzZXJuYW1lIjoiZXN0ZWJhbmNiIiwiVHlwZSI6MCwiaWF0IjoxNjg3MjkwODE2LCJleHAiOjE2ODc0Mjc2MTZ9.dlhvW0Q1IiMQGom8QkSO_-0kIe2R0cfkBcNxRrIXRZk';
    AuthToken(token);
    expect(AxiosClient.defaults.headers.common['Authorization']).toBe(`Bearer ${token}`);
  });

  test('Should delete the Authorization header when a falsy token is given', () => {
    AuthToken(null);
    expect(AxiosClient.defaults.headers.common['Authorization']).toBeUndefined();
  });

  test('Should delete the Authorization header when a empty token is given', () => {
    AuthToken('');
    expect(AxiosClient.defaults.headers.common['Authorization']).toBeUndefined();
  });
});
