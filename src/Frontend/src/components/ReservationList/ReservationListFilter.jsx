import { useState } from "react";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import DatePickerButton from "../Buttons/DatePickerButton";
import FiltersContainer from "../Containers/FiltersContainer";

const ReservationListFilter = ({ reservationData, setReservationRecords }) => {
  // State that controls the filters that there are apply
  const [filters, setFilters] = useState({
    type: null,
    method: null,
    service: null,
    customerId: null,
    startDate: null,
    endDate: null,
  });
  // State that controls when clear the filters elements
  const [clear, setClear] = useState(false);

  // Method that changes the filters that will be applied
  const changeFiltersState = (type, value) => {
    const updatedFilters = { ...filters };
    if (type === "type") {
      if (value !== "") {
        value === "Camping"
          ? (updatedFilters.type = 1)
          : (updatedFilters.type = 2);
      } else {
        updatedFilters.type = null;
      }
    } else if (type === "method") {
      if (value !== "") {
        value === "Online"
          ? (updatedFilters.method = 1)
          : (updatedFilters.method = 2);
      } else {
        updatedFilters.method = null;
      }
    } else if (type === "service") {
      value !== ""
        ? (updatedFilters.service = value)
        : (updatedFilters.service = null);
    } else if (type === "customerId") {
      value !== ""
        ? (updatedFilters.customerId = value)
        : (updatedFilters.customerId = null);
    } else if (type === "startDate") {
      value !== ""
        ? (updatedFilters.startDate = value)
        : (updatedFilters.startDate = null);
    } else if (type === "endDate") {
      value !== ""
        ? (updatedFilters.endDate = value)
        : (updatedFilters.endDate = null);
    }
    setFilters(updatedFilters);
  };

  // Method that returns an intersection between two filters
  const intersection = (filter1, filter2) => {
    return filter1.reduce((acc, curr) => {
      const match = filter2.find(
        (record) => record.reservationId == curr.reservationId
      );
      if (match) acc.push(curr);
      return acc;
    }, []);
  };

  // Method that applys the filters
  const applyFilters = (filter) => {
    // Filter by type
    const typeFilterResults =
      filters.type !== null
        ? reservationData.filter((record) => record.type == filters.type)
        : reservationData;
    // Filter by method
    const methodFilterResults =
      filters.method !== null
        ? reservationData.filter((record) => record.method == filters.method)
        : reservationData;
    // Filter by service
    const serviceFilterResults =
      filters.service !== null
        ? reservationData.filter((record) =>
            record.services.some((service) => service.name === filters.service)
          )
        : reservationData;
    // Filter by start date
    const startDateFilterResult =
      filters.startDate !== null
        ? reservationData.filter(
            (record) => record.startDate == filters.startDate
          )
        : reservationData;
    // Filter by end date
    const endDateFilterResult =
      filters.endDate !== null
        ? reservationData.filter((record) => record.endDate == filters.endDate)
        : reservationData;
    // Filter by customer id
    const customerIdFilterResults =
      filters.customerId !== null
        ? reservationData.filter(
            (record) => record.customerId == filters.customerId
          )
        : reservationData;

    // Intersections between the filters results
    const intersectionTM = intersection(typeFilterResults, methodFilterResults);
    const intersectionSC = intersection(
      serviceFilterResults,
      customerIdFilterResults
    );
    const intersectionSdEd = intersection(
      startDateFilterResult,
      endDateFilterResult
    );
    const intersectionTMSC = intersection(intersectionTM, intersectionSC);
    const intersectionTMSCSdEd = intersection(
      intersectionTMSC,
      intersectionSdEd
    );
    // The table items are updated
    setReservationRecords(intersectionTMSCSdEd);
  };

  // Method that removes the filtes applied
  const deleteFilters = () => {
    window.location.reload(true);
  };

  return (
    <>
      <FiltersContainer applyFunction={applyFilters} restartFunction={deleteFilters}>
        <span className="sm:mr-3">
          <DropDownSelect
            text="Type"
            disabled={false}
            options={["", "Picnic", "Camping"]}
            typeChange="type"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="mx-4 sm:mx-0 sm:ml-3">
          <DropDownSelect
            text="Method"
            disabled={false}
            options={["", "Online", "In site"]}
            typeChange="method"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="sm:mt-6 sm:mr-3">
          <DropDownSelect
            text="Service"
            disabled={false}
            options={["", "Kayak", "Bicycle"]}
            typeChange="service"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="sm:mt-2 sm:mr-3">
          <DatePickerButton
            text="Start Date"
            typeClass="1"
            type="startDate"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="sm:mt-2">
          <DatePickerButton
            text="End Date"
            typeClass="2"
            type="endDate"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="sm:ml-3 mt-0.5 sm:mt-0">
          <InputButton
            type="customerId"
            text="Costumer Id"
            placeholderText=""
            onChangeFunction={changeFiltersState}
          />
        </span>
      </FiltersContainer>
    </>
  );
};

export default ReservationListFilter;
