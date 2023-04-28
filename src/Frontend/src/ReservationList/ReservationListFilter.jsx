import { useState } from "react";
import InputButton from "../components/Buttons/InputButton";
import DropDownSelect from "../components/Buttons/DropDownSelect";
import FiltersContainer from "../components/Containers/FiltersContainer";

const ReservationListFilter = ({ reservationData, setReservationRecords }) => {
  // State that controls the filters that there are apply
  const [filters, setFilters] = useState({
    type: null,
    method: null,
    service: null,
    reservationId: null,
  });
  // Method that changes the filters that will be applied
  const changeFiltersState = (type, value) => {
    const updatedFilters = { ...filters };
    if (type === "type") {
      value !== ""
        ? (updatedFilters.type = value)
        : (updatedFilters.type = null);
    } else if (type === "method") {
      value !== ""
        ? (updatedFilters.method = value)
        : (updatedFilters.method = null);
    } else if (type === "service") {
      value !== ""
        ? (updatedFilters.service = value)
        : (updatedFilters.service = null);
    } else if (type === "reservationId") {
      value !== ""
        ? (updatedFilters.reservationId = value)
        : (updatedFilters.reservationId = null);
    }
    setFilters(updatedFilters);
  };

  // Method that applys the filters
  const applyFilters = (filter) => {
    const typeFilterResults =
      filters.type !== null
        ? reservationData.filter((record) => record.type === filters.type)
        : reservationData;
    const methodFilterResults =
      filters.method !== null
        ? reservationData.filter((record) => record.method === filters.method)
        : reservationData;

    const reservationIdFilterResults =
      filters.reservationId !== null
        ? reservationData.filter(
            (record) => record.reservationId == filters.reservationId
          )
        : reservationData;

    const serviceFilterResults =
      filters.service !== null
        ? reservationData.filter((record) =>
            record.services.some((service) => service.name === filters.service)
          )
        : reservationData;

    const intersectionTypeMethod = typeFilterResults.reduce((acc, curr) => {
      const match = methodFilterResults.find(
        (record) => record.reservationId === curr.reservationId
      );
      if (match) acc.push(curr);
      return acc;
    }, []);
    const result = intersectionTypeMethod.reduce((acc, curr) => {
      const match = serviceFilterResults.find(
        (record) => record.reservationId === curr.reservationId
      );
      if (match) acc.push(curr);
      return acc;
    }, []);

    const result2 = reservationIdFilterResults.reduce((acc, curr) => {
      const match = result.find(
        (record) => record.reservationId == curr.reservationId
      );
      if (match) acc.push(curr);
      return acc;
    }, []);

    setReservationRecords(result2);
  };
  return (
    <>
      <FiltersContainer applyFunction={applyFilters}>
        <span className="">
          <DropDownSelect
            text="Type"
            disabled={false}
            options={["", "Picnic", "Camping"]}
            typeChange="type"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="mx-4 sm:mt-4 sm:mx-0">
          <DropDownSelect
            text="Method"
            disabled={false}
            options={["", "Online", "In site"]}
            typeChange="method"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="">
          <DropDownSelect
            text="Service"
            disabled={false}
            options={["", "Kayak", "Bicycle"]}
            typeChange="service"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <InputButton text="Start Date" />
        <span className="mx-4 sm:mx-0">
          <InputButton text="End Date" />
        </span>
        <InputButton
          type="reservationId"
          text="Reservation Id"
          onChangeFunction={changeFiltersState}
        />
      </FiltersContainer>
    </>
  );
};

export default ReservationListFilter;
