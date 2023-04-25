import { useEffect, useState } from "react";

const ModalContent = ({reservationId}) => {
  const test = {
    id: '118090359',
    name: 'Esteban Castañeda Blanco',
    nationality: 'American',
    reservation_date: '20/04/2023',
    start_date: '22/04/2023',
    end_date: '25/04/2023',
    people: 4,
    services: [
      {
        name: 'Kayak',
        price: '5'
      },
      {
        name: 'Bicycle',
        price: '5'
      }
    ],
    plate_numbers: [
      'CDI-017',
      'BVI-193',
      'FQP-500'
    ]
    ,
    parcel: {
      number: '7',
      price: '20'
    },
    total_price: '100' 
  };

  const [information, setInformation] = useState({});
  useEffect(() => {
    setInformation(test);
  }, []);

  return (
    <>
      <div className="my-3 grid grid-cols-1">
        <div className="mb-2 text-lg">Id: {information.id}</div>
        <div className="mb-2 text-lg">Name: {information.name}</div>
        <div className="mb-2 text-lg">Nationality: {information.nationality}</div>
        <div className="mb-2 text-lg">Reservation date: {information.reservation_date}</div>
        <div className="mb-2 text-lg">Start date: {information.start_date}</div>
        <div className="mb-2 text-lg">End date: {information.end_date}</div>
        <div className="mb-2 text-lg">People: {information.people}</div>
        <div className="mb-2 text-lg">
          Services: 
            <ul className="mb-2 list-disc">
              {
                information.services && (
                  information.services.map((service, index) => (
                    <li key={index} className="mb-2 ml-10">{service.name}: (${service.price})</li>
                  ))
                )
              }
            </ul>
        </div>
        <div className="mb-2 text-lg">
          Car plates: 
            <ul className="mb-2 list-disc">
              {
                information.plate_numbers && (
                  information.plate_numbers.map((plate_number, index) => (
                    <li key={index} className="mb-2 ml-10">{plate_number}</li>
                  ))
                )
              }
            </ul>
        </div>
      </div>
    </>
  )
}

export default ModalContent