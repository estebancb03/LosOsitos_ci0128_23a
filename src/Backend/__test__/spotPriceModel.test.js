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
       "Currency": "USD",
       "Location_Spot": 1,
       "Price": 20,
     },
      {
       "Currency": "CRC",
       "Location_Spot": 1,
       "Price": 10000,
     },
      {
       "Currency": "USD",
       "Location_Spot": 2,
       "Price": 20,
     },
     {
       "Currency": "CRC",
       "Location_Spot": 2,
       "Price": 10000,
     },
     {
       "Currency": "USD",
       "Location_Spot": 3,
       "Price": 15,
     },
     {
       "Currency": "CRC",
       "Location_Spot": 3,
       "Price": 7500,
     },
     {
       "Currency": "USD",
       "Location_Spot": 4,
       "Price": 10,
     },
     {
       "Currency": "CRC",
       "Location_Spot": 4,
       "Price": 5000,
     },
     {
       "Currency": "USD",
       "Location_Spot": 5,
       "Price": 20,
     },
     {
       "Currency": "CRC",
       "Location_Spot": 5,
       "Price": 10000,
     },
     {
       "Currency": "USD",
       "Location_Spot": 6,
       "Price": 20,
     },
     {
       "Currency": "CRC",
       "Location_Spot": 6,
       "Price": 10000,
     },
     {
       "Currency": "USD",
       "Location_Spot": 10,
       "Price": 20,
     },
     {
       "Currency": "CRC",
       "Location_Spot": 10,
       "Price": 10000,
      },
    ];
    await getSpotPrices(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});