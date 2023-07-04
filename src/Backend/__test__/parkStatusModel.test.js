import { postOcupation } from "../src/models/parkStatusModel";

describe('parkStatusModel', () => {
    test('getOcupation, get ocupation info of a certain day', async () => {
    const mockReq = {body: { dateReq: "6-28-2023" }};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    await postOcupation(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });

    test('getOcupation, get ocupation info of a certain day, fails is date is not formated correctly', async () => {
    const mockReq = {body: { dateReq: "23/1/22" }};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    await postOcupation(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
  });
});
