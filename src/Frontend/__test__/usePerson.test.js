import { useContext } from "react";
import usePerson from "../src/hooks/usePerson";

const mockAuthContext = {
  token: `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAg
    ICAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3M
    jExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAl
    A8QbRC5irb905U
  `,
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe('usePerson', () => {
  test("setPersonData sets the new data into the reservation", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn().mockResolvedValue({
      data: [{ Value: 537.33 }],
    });
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const personData = [
      {
        Name: "John",
        LastName1: "Doe",
        LastName2: "Smith",
        Gender: 0,
        Email: "johndoe@gmail.com",
        Country_Name: "Costa Rica",
        State: "San José",
        Birth_Date: "1990-01-01",
      },
      ];
    const reservation = { ID: 1 };
    const setReservation = jest.fn();
    const { setPersonData } = usePerson();
    setPersonData(personData, reservation, setReservation);
    expect(setReservation).toHaveBeenCalledWith({
      ID: 1,
      Name: "John",
      LastName1: "Doe",
      LastName2: "Smith",
      Gender: 0,
      Email: "johndoe@gmail.com",
      Country_Name: "Costa Rica",
      State: "San José",
      Birth_Date: "1990-01-01",
    });
  });

  test("modifyPersonDara changes the reservation object fields", () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn().mockResolvedValue({
      data: [{ Value: 537.33 }],
    });
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const reservation = {
      ID: 1,
      Name: "John",
      LastName1: "Doe",
      LastName2: "Smith",
      Gender: 0,
      Email: "johndoe@example.com",
      Country_Name: "Costa Rica",
      State: "San José",
      Birth_Date: "1990-01-01",
    };
    const { modifyPersonData } = usePerson();
    const result = modifyPersonData("gender", "Female", reservation);
    expect(result).toEqual({
      ID: 1,
      Name: "John",
      LastName1: "Doe",
      LastName2: "Smith",
      Gender: 1,
      Email: "johndoe@example.com",
      Country_Name: "Costa Rica",
      State: "San José",
      Birth_Date: "1990-01-01",
    });
  });
});