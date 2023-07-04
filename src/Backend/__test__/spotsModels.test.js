import { getAllSpots } from "../src/models/spotsModels.js";
describe('spotsModel', () => {
  test('getAllSpots names of all the spots', async () => {
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
          "Location": 7,
          "Size": 121
      },
      {
          "Location": 8,
          "Size": 121
      },
      {
          "Location": 9,
          "Size": 119
      },
      {
          "Location": 10,
          "Size": 121
      },
      {
          "Location": 11,
          "Size": 182
      },
      {
          "Location": 12,
          "Size": 182
      },
      {
          "Location": 13,
          "Size": 182
      },
      {
          "Location": 14,
          "Size": 121
      },
      {
          "Location": 15,
          "Size": 119
      },
      {
          "Location": 16,
          "Size": 121
      },
      {
          "Location": 17,
          "Size": 121
      },
      {
          "Location": 18,
          "Size": 121
      },
      {
          "Location": 19,
          "Size": 121
      },
      {
          "Location": 20,
          "Size": 119
      },
      {
          "Location": 21,
          "Size": 119
      },
      {
          "Location": 22,
          "Size": 121
      },
      {
          "Location": 23,
          "Size": 119
      },
      {
          "Location": 24,
          "Size": 121
      }
  ];
    await getAllSpots(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});