import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import useServices from "../../hooks/useServices";
import { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import InputButton from "../Buttons/InputButton";
import Button from "../Buttons/Button";

const Services = () => {
  const { servicesWithQuantityAndPrices } = useServices();
  const columnNames = ["Name", "Quantity", "USD", "CRC", "Modify", "Delete"];

  const readyToLoad = () => {
    return servicesWithQuantityAndPrices.length > 0;
  };

  const checkQuantity = (quantity) => {
    let validQuantity = 0;
    quantity === 0 ? (validQuantity = "NA") : (validQuantity = quantity);
    return validQuantity;
  };
  return (
    <>
      {readyToLoad() && (
        <div>
          <Table colums={columnNames}>
            {servicesWithQuantityAndPrices.map((service, index) => (
              <TableItem
                key={index}
                number={index}
                data={[
                  service.Name,
                  <InputButton
                    placeholderText={checkQuantity(service.Quantity)}
                    disabled={true}
                  />,
                  <InputButton placeholderText={service.USD} disabled={true} />,
                  <InputButton placeholderText={service.CRC} disabled={true} />,
                  <Button text={<BsPencil />} />,
                  <Button text={<TiDeleteOutline />} />,
                ]}
              />
            ))}
          </Table>
          <div className="grid grid-cols-10 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4 ">
            <Button text={"Create"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
