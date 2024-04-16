import React from "react";
import Dash from "../../../components/dashboardcomps/Dash/Dash";
import Fund from "../../../components/dashboardcomps/fund/Fund";
import Withdraw from "../../../components/dashboardcomps/withdraw/Withdraw";
import Invest from "../../../components/dashboardcomps/invest/Invest";
import TransactionHistory from "../../../components/dashboardcomps/transactionhistory/TransactionHistory";
import HelpSupport from "../../../components/dashboardcomps/helpsupport/HelpSupport";

const TabsDashboard = ({ activeDashboard, setActiveDashboard }) => {
  switch (activeDashboard) {
    case "invest":
      return (
        <Invest
          activeDashboard={activeDashboard}
          setActiveDashboard={setActiveDashboard}
        />
      );
    case "dashboard":
      return (
        <Dash
          activeDashboard={activeDashboard}
          setActiveDashboard={setActiveDashboard}
        />
      );
    case "fund":
      return (
        <Fund
          activeDashboard={activeDashboard}
          setActiveDashboard={setActiveDashboard}
        />
      );
    case "withdraw":
      return (
        <Withdraw
          activeDashboard={activeDashboard}
          setActiveDashboard={setActiveDashboard}
        />
      );
      case "history":
      return (
        <TransactionHistory
          activeDashboard={activeDashboard}
          setActiveDashboard={setActiveDashboard}
        />
      );
      case "help":
        return (
          <HelpSupport
          activeDashboard={activeDashboard}
          setActiveDashboard={setActiveDashboard}
          />

        )

    default:
      return (
        <Dash
          activeDashboard={activeDashboard}
          setActiveDashboard={setActiveDashboard}
        />
      );
  }
};

export default TabsDashboard;
