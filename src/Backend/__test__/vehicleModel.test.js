import { getVehiclesByReservationID } from "../src/models/vehicleModel";

describe("vehicleModel", () => {
  test("getVehicleByReservationID returns VID for client ID and reservation date", async () => {
    const req = { params: { ID: "777", Reservation_Date: "2023-06-01 03:19:03.357" } };
    const res = { status: jest.fn(), json: jest.fn() };
    const mockResult = { recordset: [{ ID_Vehicle: "VVV777" }] };

    await getVehiclesByReservationID(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResult.recordset);
  });

  test("getVehicleByReservationID returns no VID if there is no match for ID or for date", async () => {
    const req = { params: { ID: "777", Reservation_Date: "2023-06-01" } };
    const res = { status: jest.fn(), json: jest.fn() };
    const mockResult = { recordset: [] };

    await getVehiclesByReservationID(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResult.recordset);
  });
  
  test("getVehicleByReservationID returns error if given invalid parameters", async () => {
    const req = { params: { ID: "invalid", Reservation_Date: "invalid" } };
    const res = { status: jest.fn(), json: jest.fn() };

    await getVehiclesByReservationID(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
})
