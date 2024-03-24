import React from "react";
import SendBtc from "./sendbtc/SendBtc";
import Amount from "./amount/Amount"
import ConfirmAmount from "./cofirmamount/ConfirmAmount"

const PaymentByBtcTabs = ({ activeTabBtc, setActiveTabBtc, setInputAmount, inputAmount  }) => {
  switch (activeTabBtc) {
    case "amount":
      return <Amount activeTabBtc={activeTabBtc} setActiveTabBtc={setActiveTabBtc} setInputAmount={setInputAmount} inputAmount={inputAmount} />;
    case "confirmamount":
      return <ConfirmAmount activeTabBtc={activeTabBtc} setActiveTabBtc={setActiveTabBtc} inputAmount={inputAmount} setInputAmount={setInputAmount}/>;
    case "sendbtc":
      return <SendBtc activeTabBtc={activeTabBtc} setActiveTabBtc={setActiveTabBtc} />;

    default:
      return <Amount ctiveTabBtc={activeTabBtc} setActiveTabBtc={setActiveTabBtc}  />;
  }
};

export default PaymentByBtcTabs;
