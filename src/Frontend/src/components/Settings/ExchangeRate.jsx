import { useEffect, useState } from "react";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import useExchange from "../../hooks/useExchange";
import useUpdateCapacity from "../../hooks/useUpdateCapacity";

const ExchangeRate = () => {
  const { exchange } = useExchange();
  const [dollarPrice, setDollarPrice] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const [isValidPrice, setIsValidPrice] = useState(true);
  const [modifyButton, setModifyButton] = useState("Modify");

  const columnNames = ["Currency", "Price", "Action"];
  const rowName = "USD";

  const checkValueEntered = () => {
    const regex = /^(?!.*[,])\d+(\.\d+)?$/;
    let successfulConversion = true;
    regex.test(dollarPrice)
      ? setDollarPrice(parseFloat(dollarPrice))
      : (successfulConversion = false);
    return successfulConversion;
  };

  const changeButtonAction = () => {
    if (modifyButton === "Modify") {
      setModifyButton("Save");
    } else {
      if (isValidPrice) {
        setModifyButton("Modify");
        useUpdateCapacity("USD", dollarPrice);
      } else {
        alert(
          "Values for prices can only be positive numbers" +
            "\nIf you entered a number with commas, remove them" +
            "\nChanges will not be applied"
        );
      }
    }
  };

  const enableInput = () => {
    if (isValidPrice) {
      setDisabledButton(!disabledButton);
    }
  };

  const assignValueToState = () => {
    if (dollarPrice === 0) {
      setDollarPrice(exchange.USD);
    }
    return dollarPrice;
  };

  const modifyDollarPrice = (type, value) => {
    setDollarPrice(value);
  };

  const readyToLoad = () => {
    return exchange !== undefined && exchange.USD > 0;
  };

  const modifyHandleClick = () => {
    if (modifyButton === "Save") {
      if (checkValueEntered()) {
        setIsValidPrice(true);
      } else {
        setIsValidPrice(false);
      }
    }
  };

  useEffect(() => {
    modifyHandleClick();
  }, [dollarPrice]);

  return (
    readyToLoad() && (
      <>
        <div>
          <Table colums={columnNames}>
            <TableItem
              key={0}
              number={0}
              data={[
                rowName,
                <InputButton
                  placeholderText={assignValueToState()}
                  disabled={disabledButton}
                  type="DollarPrice"
                  datacy="ExchangeRate-input"
                  onChangeFunction={modifyDollarPrice}
                />,
                <Button
                  text={modifyButton}
                  datacy="ExchangeRate-button"
                  onclickFunction={() => {
                    changeButtonAction();
                    enableInput();
                  }}
                />,
              ]}
            />
          </Table>
        </div>
      </>
    )
  );
};

export default ExchangeRate;
