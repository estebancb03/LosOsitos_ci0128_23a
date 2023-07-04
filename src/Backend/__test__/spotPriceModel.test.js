import { getSpotPrices } from "../src/models/spotPriceModel.js";
describe('spotPriceModel', () => {
  test('getSpotPrices returns prices of all the spots', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
    const expectedRecordset = [
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 1
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 1
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 2
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 2
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 3
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 3
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 4
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 4
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 5
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 5
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 6
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 6
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 7
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 7
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 8
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 8
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 9
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 9
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 10
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 10
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 11
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 11
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 12
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 12
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 13
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 13
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 14
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 14
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 15
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 15
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 16
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 16
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 17
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 17
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 18
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 18
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 19
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 19
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 20
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 20
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 21
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 21
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 22
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 22
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 23
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 23
      },
      {
          "Currency": "CRC",
          "Price": 0,
          "Location_Spot": 24
      },
      {
          "Currency": "USD",
          "Price": 0,
          "Location_Spot": 24
      }
  ];
    await getSpotPrices(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});