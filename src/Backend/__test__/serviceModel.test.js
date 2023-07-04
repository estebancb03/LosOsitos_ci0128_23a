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
      {Name: "Bicycle (eight Hours) "},
      {Name: "Bicycle (Four Hours)"},
      {Name: "Bicycle (full Day)"},
      {Name: "Coconut Water"},
      {Name: "Diving"},
      { Name: "Hiking"},
      {Name: "Kayak (double) (half Hour)"},
      {Name: "Kayak (Double) (One Hour)" },
      {Name: "Kayak (Individual) (Half Hour)"},
      {Name: "Kayak (individual) (one Hour)"},
      {Name: "Test"},
    ];
    await getServicesOptions(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});