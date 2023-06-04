import usePerson from "../src/hooks/usePerson.jsx";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";

it("test_set_person_data", () => {
    const personData = [
        {
            Name: "John",
            LastName1: "Doe",
            LastName2: "Smith",
            Gender: "Male",
            Email: "johndoe@example.com",
            Country_Name: "Costa Rica",
            State: "San José",
            Birth_Date: "1990-01-01"
        }
    ];
    const reservation = {
        ID: 1,
        Name: "",
        LastName1: "",
        LastName2: "",
        Gender: "",
        Email: "",
        Country_Name: "",
        State: "",
        Birth_Date: ""
    };
    const setReservation = jest.fn();
    usePerson().setPersonData(personData, reservation, setReservation);
    expect(setReservation).toHaveBeenCalledWith({
        ID: 1,
        Name: "John",
        LastName1: "Doe",
        LastName2: "Smith",
        Gender: "Male",
        Email: "johndoe@example.com",
        Country_Name: "Costa Rica",
        State: "San José",
        Birth_Date: "1990-01-01"
    });
});