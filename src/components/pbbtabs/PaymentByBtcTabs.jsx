import React, { useState } from "react";
import SendBtc from "./sendbtc/SendBtc";
import Amount from "./amount/Amount";
import ConfirmAmount from "./cofirmamount/ConfirmAmount";

const PaymentByBtcTabs = ({ activeTabBtc, setActiveTabBtc }) => {
  const [inputData, setInputData] = useState("");
  switch (activeTabBtc) {
    case "amount":
      return (
        <Amount
          activeTabBtc={activeTabBtc}
          setActiveTabBtc={setActiveTabBtc}
          setInputData={setInputData}
        />
      );
    case "confirmamount":
      return (
        <ConfirmAmount
          activeTabBtc={activeTabBtc}
          setActiveTabBtc={setActiveTabBtc}
          setInputData={setInputData}
          inputData={inputData}
        />
      );
    case "sendbtc":
      return (
        <SendBtc
          activeTabBtc={activeTabBtc}
          setActiveTabBtc={setActiveTabBtc}
          setInputData={setInputData}
          inputData={inputData}
        />
      );

    default:
      return (
        <Amount ctiveTabBtc={activeTabBtc} setActiveTabBtc={setActiveTabBtc} />
      );
  }
};

export default PaymentByBtcTabs;
