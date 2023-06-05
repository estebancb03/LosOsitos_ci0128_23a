import { getServicesOptions } from "../src/models/serviceModel.js";

describe('getAllServices', () => {
  test('getAllServices returns the names of all services', async () => {
    const mockPool = {
      request: jest.fn().mockReturnThis(),
      query: jest.fn().mockResolvedValue({
        recordset: [
          {Name: "Bicycle"},
          {Name: "Hiking"},
          {Name: "Kayak"},
        ]
      })
    };
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
    await getServicesOptions(mockReq, mockRes, mockPool);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith([
      {Name: "Bicycle"},
      {Name: "Hiking"},
      {Name: "Kayak"},
    ]);
  });
});