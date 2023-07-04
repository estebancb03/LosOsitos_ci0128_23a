import { getActualCapacities, getExchangeRate, getTermsAndConditionLink, updateCapacity, updateTermsAndConditionsLink } from "../src/models/settingCapacityModel.js";
describe("settingCapacityModel", () => {
  test("getActualCapacities info the capacity settings", async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };
    const expectedRecordset = [
      {
        Link: null,
        Type: "CampingOnline",
        Value: 10,
      },
      {
        Link: null,
        Type: "CampingOnSite",
        Value: 20,
      },
      {
        Link: null,
        Type: "PicnicOnline",
        Value: 30,
      },
      {
        Link: null,
        Type: "PicnicOnSite",
        Value: 40,
      },
      {
        Link: "http://res.cloudinary.com/asojunquillal/image/upload/v1688352577/termsAndConditions/madwudr7zfstii5flzx6.jpg",
        Type: "TermsAndConditions",
        Value: 0
      }
      ,
      {
        Link: null,
        Type: "USD",
        Value: 545.96,
      },
    ];
    await getActualCapacities(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });

  test('getTermsAndConditionLink Returns the link for the image of the terms and conditions', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };

    await getTermsAndConditionLink(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });

  test('updateCapacity updates de value of a capacity', async () => {
    const mockReq = {
      body: {
        type: 'USD',
        value: 545.96,
      }
    };
    const mockRes = {
      status: jest.fn(),
      send: jest.fn(),
    };

    const expectedResult = 'The update to the Setting_Capacity was successful';
    await updateCapacity(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(expectedResult);
  });

  test('getExchangeRate returns the value of a dollar in colones', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };

    const expectedResult = [{"Type": "USD", "Value": 545.96}];

    await getExchangeRate(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedResult);
  });

  test('updateTermsAndConditionsLink updates de value of a capacity', async () => {
    const mockReq = {
      body: {
        link: "http://res.cloudinary.com/asojunquillal/image/upload/v1688352577/termsAndConditions/madwudr7zfstii5flzx6.jpg"
      }
    };
    const mockRes = {
      status: jest.fn(),
      send: jest.fn(),
    };

    const expectedResult = 'The update to the Setting_Capacity was successful';
    await updateTermsAndConditionsLink(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(expectedResult);
  });



});

