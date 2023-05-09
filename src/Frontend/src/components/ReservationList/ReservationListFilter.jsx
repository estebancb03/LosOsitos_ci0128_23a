import { useEffect, useState } from "react";
import AxiosClient from "../../config/AxiosClient";
import InputButton from "../Buttons/InputButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import DatePickerButton from "../Buttons/DatePickerButton";
import FiltersContainer from "../Containers/FiltersContainer";
import { formatDateDTMMDDYYYY, addZerosToDate } from "../../helpers/formatDate";

const ReservationListFilter = ({
  reservationData,
  setReservationRecords,
  services,
}) => {
  // State that constrols the options of service dropdown
  const [servicesOptions, setServicesOptions] = useState([]);
  // State that controls all services names of all reservations
  const [allServicesNames, setAllServicesNames] = useState([]);
  // State that controls the filters that there are apply
  const [filters, setFilters] = useState({
    Reservation_Type: null,
    Reservation_Method: null,
    service: null,
    ID: null,
    Start_Date: null,
    End_Date: null,
  });

  // Method that full the serviceOptions with the data base result
  const getServicesOptions = async () => {
    try {
      const url = "/reservation-list/getServicesOptions";
      const options = await AxiosClient.get(url);
      const result = ["", ...options.data.map((service) => service.Name)];
      setServicesOptions(result);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Method that search if the reservation have x service
  const findServiceInReservation = (reservationID, serviceName) => {
    const filteredByReservationID = services.filter(
      (service) => service.ID_Client + service.Reservation_Date == reservationID
    );
    const filtered = filteredByReservationID.filter(
      (service) => service.Name_Service == serviceName
    );
    return filtered.length > 0 ? true : false;
  };

  // Method that changes the filters that will be applied
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
        ? (updatedFilters.service = value)
        : (updatedFilters.service = null);
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

  // Method that returns an intersection between two filters
  const intersection = (filter1, filter2) => {
    return filter1.reduce((acc, curr) => {
      const match = filter2.find(
        (record) =>
          record.ID + record.reservationDate == curr.ID + curr.reservationDate
      );
      if (match) acc.push(curr);
      return acc;
    }, []);
  };

  // Method that applys the filters
  const applyFilters = (filter) => {
    // Filter by type
    const typeFilterResults =
      filters.Reservation_Type !== null
        ? reservationData.filter(
            (record) => record.Reservation_Type == filters.Reservation_Type
          )
        : reservationData;
    // Filter by method
    const methodFilterResults =
      filters.Reservation_Method !== null
        ? reservationData.filter(
            (record) => record.Reservation_Method == filters.Reservation_Method
          )
        : reservationData;
    // Filter by service
    const serviceFilterResults =
      filters.service !== null
        ? reservationData.filter(
            (record) =>
              findServiceInReservation(
                record.ID + record.Reservation_Date,
                filters.service
              ) == true
          )
        : reservationData;
    // Filter by start date
    const startDateFilterResult =
      filters.Start_Date !== null
        ? reservationData.filter(
            (record) =>
              formatDateDTMMDDYYYY(record.Start_Date) ==
              addZerosToDate(filters.Start_Date)
          )
        : reservationData;
    // Filter by end date
    const endDateFilterResult =
      filters.End_Date !== null
        ? reservationData.filter(
            (record) =>
              formatDateDTMMDDYYYY(record.End_Date) ==
              addZerosToDate(filters.End_Date)
          )
        : reservationData;
    // Filter by customer id
    const customerIdFilterResults =
      filters.ID !== null
        ? reservationData.filter((record) => record.ID.trim() == filters.ID)
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

  useEffect(() => {
    getServicesOptions();
  }, []);

  return (
    <>
      <FiltersContainer
        applyFunction={applyFilters}
        restartFunction={deleteFilters}
      >
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
            options={servicesOptions}
            typeChange="service"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="ml-4 sm:mt-5">
          <DatePickerButton
            text="Start Date"
            typeClass=""
            type="startDate"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="ml-4 mr-1 sm:mx-0 sm:mr-3 sm:mt-3.5">
          <DatePickerButton
            text="End Date"
            typeClass=""
            type="endDate"
            onChangeFunction={changeFiltersState}
          />
        </span>
        <span className="mx-3 -mt-0.5 sm:mt-0 sm:ml-4 w-[95%] sm:w-[90%]">
          <InputButton
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

export default ReservationListFilter;
