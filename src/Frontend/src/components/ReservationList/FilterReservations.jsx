import React, { useEffect, useState } from "react";
import { formatDateDTMMDDYYYY, addZerosToDate } from "../../helpers/formatDate";
import useServices from "../../hooks/useServices.jsx";
import useReservationFilter from "../../hooks/useReservationFilter";

import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import DatePickerButton from "../Buttons/DatePickerButton";
import FiltersContainer from "../Containers/FiltersContainer";

const FilterReservations = (props) => {
  const {
    reservations,
    setCurrentReservations,
    exitMethod
  } = props;
  const { servicesNames } = useServices();
  const { handleFilter } = useReservationFilter(reservations);

  const [filters, setFilters] = useState({
    Reservation_Type: null,
    Reservation_Method: null,
    Service: null,
    ID: null,
    Start_Date: null,
    End_Date: null,
  });

  const changeFiltersState = (type, value) => {
    const updatedFilters = { ...filters };
    if (type === "type") {
      if (value !== "") {
        value === "Camping"
          ? (updatedFilters.Reservation_Type = 1)
          : (updatedFilters.Reservation_Type = 0);
      } else {
        updatedFilters.Reservation_Type = null;
      }
    } else if (type === "method") {
      if (value !== "") {
        value === "Online"
          ? (updatedFilters.Reservation_Method = 0)
          : (updatedFilters.Reservation_Method = 1);
      } else {
        updatedFilters.Reservation_Method = null;
      }
    } else if (type === "service") {
      value !== ""
        ? (updatedFilters.Service = value)
        : (updatedFilters.Service = null);
    } else if (type === "customerId") {
      value !== "" ? (updatedFilters.ID = value) : (updatedFilters.ID = null);
    } else if (type === "startDate") {
      value !== ""
        ? (updatedFilters.Start_Date = value)
        : (updatedFilters.Start_Date = null);
    } else if (type === "endDate") {
      value !== ""
        ? (updatedFilters.End_Date = value)
        : (updatedFilters.End_Date = null);
    }
    setFilters(updatedFilters);
  };

  const apply = () => {
    const filteredReservations = handleFilter(filters);
    setCurrentReservations(filteredReservations);
  };

  return (
    <>
      <FiltersContainer
        applyFunction={apply}
        restartFunction={exitMethod}
      >
        <span className="sm:mr-3">
          <DropDownSelect
            selectedOption={""}
            text="Type"
            disabled={false}
            options={["", "Picnic", "Camping"]}
            typeChange="type"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="mx-4 sm:mx-0 sm:ml-3">
          <DropDownSelect
            selectedOption={""}
            text="Method"
            disabled={false}
            options={["", "Online", "In site"]}
            typeChange="method"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="sm:mt-6 sm:mr-3">
          <DropDownSelect
            selectedOption={""}
            text="Service"
            disabled={false}
            options={["", ...servicesNames]}
            typeChange="service"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="ml-4 sm:mt-5">
          <DatePickerButton
            selectedDate={""}
            text="Start Date"
            typeClass=""
            type="startDate"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="ml-4 mr-1 sm:mx-0 sm:mr-3 sm:mt-3.5">
          <DatePickerButton
            selectedDate={""}
            text="End Date"
            typeClass=""
            type="endDate"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="mx-3 -mt-0.5 sm:mt-0 sm:ml-4 w-[95%] sm:w-[90%]">
          <InputButton
            disabled={false}
            type="customerId"
            text="Id"
            placeholderText=""
            onChangeFunction={changeFiltersState}
          />
        </span>
      </FiltersContainer>
    </>
  );
};

export default FilterReservations;
