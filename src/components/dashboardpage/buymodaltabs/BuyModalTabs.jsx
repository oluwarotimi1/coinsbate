import React from "react";
import Buy from "../buy/Buy";
import Sell from "../sell/Sell";

const BuyModalTabs = ({ activeTab, setActiveTab }) => {
  switch (activeTab) {
    case "buy":
      return <Buy activetab={activeTab} setActiveTab={setActiveTab} />;
    case "sell":
      return <Sell activetab={activeTab} setActiveTab={setActiveTab} />;
    
    default:
      return <Buy />;
  }
};

export default BuyModalTabs;
