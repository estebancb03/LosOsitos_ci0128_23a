import { getCRCPrices, getUSDPrices, getPrices, getPriceByARDGCurrency } from "../src/models/ticketModel.js";

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
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "USD",
        "Price": 13.56
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "USD",
        "Price": 13.56
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "USD",
        "Price": 18.08
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "USD",
        "Price": 18.08
    },
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
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "CRC",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "CRC",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "CRC",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "CRC",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 2,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "USD",
        "Price": 0
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "CRC",
        "Price": 0
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 0,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "CRC",
        "Price": 0
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "CRC",
        "Price": 2260
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 0,
        "Reservation_Type": 1,
        "Special": 1,
        "Currency": "CRC",
        "Price": 2260
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 0,
        "Currency": "USD",
        "Price": 13.56
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 1,
        "Reservation_Type": 0,
        "Special": 1,
        "Currency": "USD",
        "Price": 13.56
    },
    {
        "Age_Range": 3,
        "Demographic_Group": 1,
        "Reservation_Type": 1,
        "Special": 0,
        "Currency": "USD",
        "Price": 18.08
    },
    {
        "Age_Range": 3,
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

  // Tests that the function returns the correct price when all parameters are valid
  it('test_valid_parameters', async () => {
    const req = {
      params: {
        Age_Range: 0,
        Demographic_Group: 1,
        Reservation_Type: 0,
        Currency: 'USD'
      }
    };
    const res = {
      json: jest.fn()
    };
    const expectedRecordset = [
      {
        "Price": 10,
        "Price": 5.65,
      },
      {
        "Price": 5.65,
      },
    ]

    await getPriceByARDGCurrency(req, res);

    expect(res.json).toHaveBeenCalledWith(expectedRecordset);
  });

  // Tests that the function returns an empty array when no matching records are found
  it('test_no_matching_records', async () => {
    const req = {
      params: {
        Age_Range: 10,
        Demographic_Group: 10,
        Reservation_Type: 10,
        Currency: 'USD'
      }
    };
    const res = {
      json: jest.fn()
    };

    await getPriceByARDGCurrency(req, res);

    expect(res.json).toHaveBeenCalledWith([]);
  });

  // Tests that the function throws an error when Age_Range parameter is missing
  it('test_missing_age_range_parameter', async () => {
    const req = {
      params: {
        Demographic_Group: 1,
        Reservation_Type: 0,
        Currency: 'USD'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    await getPriceByARDGCurrency(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  // Tests that the function throws an error when Demographic_Group parameter is missing
  it('test_missing_demographic_group_parameter', async () => {
    const req = {
      params: {
        Age_Range: 0,
        Reservation_Type: 0,
        Currency: 'USD'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    await getPriceByARDGCurrency(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  // Tests that the function throws an error when Reservation_Type parameter is missing
  it('test_missing_reservation_type_parameter', async () => {
    const req = {
      params: {
        Age_Range: 0,
        Demographic_Group: 1,
        Currency: 'USD'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    await getPriceByARDGCurrency(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  // Tests that the function throws an error when Currency parameter is missing
  it('test_missing_currency_parameter', async () => {
    const req = {
      params: {
        Age_Range: 0,
        Demographic_Group: 0,
        Reservation_Type: 0
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    await getPriceByARDGCurrency(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});