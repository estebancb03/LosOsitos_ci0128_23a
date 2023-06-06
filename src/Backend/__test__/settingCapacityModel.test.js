import { getActualCapacities } from "../src/models/settingCapacityModel.js";
describe('settingCapacityModel', () => {
  test('getActualCapacities info the capacity settings', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
    const expectedRecordset = [
            {
             "Type": "CampingOnline",
             "Value": 10,
           },
            {
             "Type": "CampingOnSite",
             "Value": 20,
           },
            {
             "Type": "PicnicOnline",
             "Value": 30,
           },
            {
             "Type": "PicnicOnSite",
             "Value": 40,
           },
         ];
    await getActualCapacities(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});