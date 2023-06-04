import { renderHook } from "@testing-library/react-hooks";
import usePerson from "../src/hooks/usePerson.jsx";

it("test_set_person_data_correctly_sets_person_data_into_reservation", () => {
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

it("test_modify_person_data_correctly_modifies_reservation_data", () => {
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
