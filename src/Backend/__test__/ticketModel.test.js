import { getCRCPrices, getUSDPrices, getPrices } from "../src/models/ticketModel.js";

describe('ticketModel', () => {
  test('getCRCPrices returns tickets with currency equals to CRC', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };

    const expectedRecordset = [
      {
        "Age_Range": 0,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "CRC",
        "Price": 1130
      },
      {
        "Age_Range": 0,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "CRC",
        "Price": 1130
      },
      {
        "Age_Range": 0,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "CRC",
        "Price": 3390
      },
      {
        "Age_Range": 0,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "CRC",
        "Price": 3390
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "CRC",
        "Price": 2260
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "CRC",
        "Price": 2260
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "CRC",
        "Price": 4520
      },
      {
        "Age_Range": 1,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "CRC",
        "Price": 4520
      }
    ];

    await getCRCPrices(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });

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
  
  test('getPrices returns tickets prices', async () => { //CARLOS
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };

    const expectedRecordset = [
      {
          "Age_Range": 0,
          "Demographic_Group": 0,
          "Reservation_Type": 0,
          "Special": 0,
          "Currency": "CRC",
          "Price": 1130
      },
      {
          "Age_Range": 0,
          "Demographic_Group": 0,
          "Reservation_Type": 0,
          "Special": 1,
          "Currency": "CRC",
          "Price": 1130
      },
      {
          "Age_Range": 0,
          "Demographic_Group": 0,
          "Reservation_Type": 1,
          "Special": 0,
          "Currency": "CRC",
          "Price": 3390
      },
      {
          "Age_Range": 0,
          "Demographic_Group": 0,
          "Reservation_Type": 1,
          "Special": 1,
          "Currency": "CRC",
          "Price": 3390
      },
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
          "Demographic_Group": 0,
          "Reservation_Type": 0,
          "Special": 0,
          "Currency": "CRC",
          "Price": 2260
      },
      {
          "Age_Range": 1,
          "Demographic_Group": 0,
          "Reservation_Type": 0,
          "Special": 1,
          "Currency": "CRC",
          "Price": 2260
      },
      {
          "Age_Range": 1,
          "Demographic_Group": 0,
          "Reservation_Type": 1,
          "Special": 0,
          "Currency": "CRC",
          "Price": 4520
      },
      {
          "Age_Range": 1,
          "Demographic_Group": 0,
          "Reservation_Type": 1,
          "Special": 1,
          "Currency": "CRC",
          "Price": 4520
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
    
    await getPrices(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});