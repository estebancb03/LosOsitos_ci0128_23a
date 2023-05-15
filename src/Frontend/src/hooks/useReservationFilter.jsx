import React from "react";
import { useState, useEffect } from "react";
import { formatDateDTMMDDYYYY, addZerosToDate } from "../helpers/formatDate";

const useReservationFilter = (reservations) => {
  // Method that returns an intersection between two filters
  const intersection = (filter1, filter2) => {
    if (
      filter1 !== null &&
      filter2 !== null &&
      filter1 !== undefined &&
      filter2 !== undefined
    ) {
      return filter1.reduce((acc, curr) => {
        const match = filter2.find(
          (record) =>
            record.ID + record.Reservation_Date ==
            curr.ID + curr.Reservation_Date
        );
        if (match) acc.push(curr);
        return acc;
      }, []);
    }
  };

  // Method that search if the reservation have x service
  const findServiceInReservation = (services, reservationID, serviceName) => {
    const filteredByReservationID = services.filter(
      (service) => service.ID_Client + service.Reservation_Date == reservationID
    );
    const filtered = filteredByReservationID.filter(
      (service) => service.Name_Service == serviceName
    );
    return filtered.length > 0 ? true : false;
  };

  const handleFilter = (filters) => {
    console.log(filters);
    // Filter by type
    const typeFilterResults =
      filters.Reservation_Type !== null &&
      filters.Reservation_Type !== undefined
        ? reservations.filter(
            (record) => record.Reservation_Type == filters.Reservation_Type
          )
        : reservations;
    // Filter by method
    const methodFilterResults =
      filters.Reservation_Method !== null
        ? reservations.filter(
            (record) => record.Reservation_Method == filters.Reservation_Method
          )
        : reservations;
    // Filter by service
    const serviceFilterResults =
      filters.Service !== null && filters.Service !== undefined
        ? reservations.filter(
            (record) =>
              findServiceInReservation(
                reservations.Services,
                record.ID + record.Reservation_Date,
                filters.Service
              ) == true
          )
        : reservations;
    // Filter by start date
    const startDateFilterResult =
      filters.Start_Date !== null && filters.Start_Date !== undefined
        ? reservations.filter(
            (record) =>
              formatDateDTMMDDYYYY(record.Start_Date) ==
              addZerosToDate(filters.Start_Date)
          )
        : reservations;
    // Filter by end date
    const endDateFilterResult =
      filters.End_Date !== null && filters.End_Date !== undefined
        ? reservations.filter(
            (record) =>
              formatDateDTMMDDYYYY(record.End_Date) ==
              addZerosToDate(filters.End_Date)
          )
        : reservations;
    // Filter by customer id
    const customerIdFilterResults =
      filters.ID !== null && filters.ID !== undefined
        ? reservations.filter((record) => record.ID.trim() == filters.ID)
        : reservations;

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
    return intersectionTMSCSdEd;
  };

  return { handleFilter };
};

export default useReservationFilter;
