import jwt from 'jsonwebtoken';
import { checkOperatorAuth, checkAdminAuth } from '../src/middlewares/authMiddleware.js';

describe('authMiddleware', () => {
  test('Should return an error message when token is invalid or expired', async () => {
    const req = {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjExODA5MDM1OSAgICAgICIsIlVzZXJuYW1lIjoiZXN0ZWJhbmNiIiwiVHlwZSI6MCwiaWF0IjoxNjg3MjkwODE2LCJleHAiOjE2ODc0Mjc2MTZ9.dlhvW0Q1IiMQGom8QkSO_-0kIe2R0cfkBcNxRrIXRZk'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await checkOperatorAuth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token' });
  });

  test('Should return an error message when token is not an admin token', async () => {
    const req = {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAgICAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MSwiaWF0IjoxNjg3NDk4NTAxLCJleHAiOjE2ODc2MzUzMDF9.yXhv1da_qYIftuAzuEQ76RTPxbpfphLe2WMY5KjFgbM'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await checkAdminAuth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid admin token' });
  });
});
