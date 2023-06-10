import { getAllSpots } from "../src/models/spotsModels.js";
describe('spotsModel', () => {
  test('getCountry names of all the countries', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
    const expectedRecordset = [
      {
          "Location": 1,
          "Size": 121
      },
      {
          "Location": 2,
          "Size": 121
      },
      {
          "Location": 3,
          "Size": 182
      },
      {
          "Location": 4,
          "Size": 119
      },
      {
          "Location": 5,
          "Size": 121
      },
      {
          "Location": 6,
          "Size": 121
      },
      {
          "Location": 10,
          "Size": 121
      }
  ];
    await getAllSpots(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});