import { getServicesOptions } from "../src/models/serviceModel.js";

describe('serviceModel', () => {
  test('getAllServices returns the names of all services', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
    const expectedRecordset = [
      { Name: "Bicycle" },
      { Name: "Hiking" },
      { Name: "Kayak" },
    ];
    await getServicesOptions(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});