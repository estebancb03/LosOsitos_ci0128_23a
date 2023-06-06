import { getCountry } from "../src/models/countryModel.js";
describe('countryModel', () => {
  test('getCountry names of all the countries', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
    const expectedRecordset = [
            {
             "Name": "Argentina",
           },
            {
             "Name": "Australia",
           },
            {
             "Name": "Canada",
           },
            {
             "Name": "Colombia",
           },
            {
             "Name": "Costa Rica",
           },
            {
             "Name": "Cuba",
           },
            {
             "Name": "Estados Unidos",
           },
            {
             "Name": "Germany",
           },
            {
             "Name": "Japan",
           },
            {
             "Name": "Mexico",
           },
            {
             "Name": "Nigeria",
           },
            {
             "Name": "Panama",
           },
            {
             "Name": "Portugal",
           },
            {
             "Name": "Russia",
           },
            {
             "Name": "Spain",
           },
            {
             "Name": "Sweden",
           },
            {
             "Name": "Switzerland",
           },
            {
             "Name": "Thailand",
           },
         ];
    await getCountry(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });
});