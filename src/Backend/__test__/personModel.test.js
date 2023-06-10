import { getPerson } from "../src/models/personModel";

describe('personModel', () => {
  test('getPerson returns all personal data referring to a person', async () => {
    const mockReq = {params: {id: "11818"}};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };

    const expectedRecordset = [
      {
        "Name": "Dylan",
        "LastName1": "Tenorio",
        "LastName2": "Rojas",
        "Gender": 3,
        "Email": "dylantr2001@gmail.com",
        "Country_Name": "Costa Rica",
        "State": "San Jose",
        "Birth_Date": new Date("2023-05-16T00:00:00.000Z")
      }
    ]

    await getPerson(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  })

  test('getPerson returns no data if the person is not registered in the database', async () => {
    const mockReq = {params: {id: "0"}};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };

    const expectedRecordset = []

    await getPerson(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  })
})
