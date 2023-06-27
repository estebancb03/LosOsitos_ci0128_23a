import { getCampingCapacity, getPicnicCapacity, getAllTickets } from "../src/models/ticketReservationModel";

describe("ticketReservationModel", () => {
  // Tests that the function returns an array of remaining camping capacity
  it('test_happy_path_returns_remaining_camping_capacity', async () => {
    const req = { params: { date: '2022-01-01' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const expected = [
      {
        "Remaining_Capacity": 10,
        "Reservation_Method": 0,
      },
      {
        "Remaining_Capacity": 20,
        "Reservation_Method": 1,
      },
    ];
    await getCampingCapacity(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(expected);
  });

  // Tests that the function returns a 500 status code when an invalid date parameter is passed
  it('test_edge_case_invalid_date_returns_500_camping_capacity', async () => {
    const req = { params: { date: 'invalid_date' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    await getCampingCapacity(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });

  // Tests that the function returns an array of remaining camping capacity
  it('test_happy_path_returns_remaining_picnic_capacity', async () => {
    const req = { params: { date: '2022-01-01' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const expected = [
      {
        "Remaining_Capacity": 30,
        "Reservation_Method": 0,
      },
      {
        "Remaining_Capacity": 40,
        "Reservation_Method": 1,
      },
    ];
    await getPicnicCapacity(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(expected);
  });

  // Tests that the function returns a 500 status code when an invalid date parameter is passed
  it('test_edge_case_invalid_date_returns_500_picnic_capacity', async () => {
    const req = { params: { date: 'invalid_date' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    await getPicnicCapacity(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });

  // Tests that function returns a 200 status code
  it('test_happy_path_returns_200_get_all_tickets', async () => {
    const req = {};
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
    await getAllTickets(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  // Tests that function returns a JSON object with all tickets
  it('test_happy_path_returns_json_get_all_tickets', async () => {
    const req = {};
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
    await getAllTickets(req, res);
    expect(res.json).toHaveBeenCalled();
  });
})