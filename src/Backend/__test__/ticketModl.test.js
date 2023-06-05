import { getUSDPrices } from "../src/models/ticketModel.js";

describe('ticketModel', () => {
  test('getUSDPrices returns tickets with currency equals to USD', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };

    const expectedRecordset = [
      {
        "Age_Range": 0,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "USD",
        "Price": 5.65
      },
      {
        "Age_Range": 0,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "USD",
        "Price": 5.65
      },
      {
        "Age_Range": 0,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "USD",
        "Price": 10.17
      },
      {
        "Age_Range": 0,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "USD",
        "Price": 10.17
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "USD",
        "Price": 13.56
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "USD",
        "Price": 13.56
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "USD",
        "Price": 18.08
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "USD",
        "Price": 18.08
      }
    ];
    
    await getUSDPrices(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});