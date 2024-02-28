import React from "react";
import Dash from "../../../components/dashboardcomps/Dash/Dash";
import Fund from "../../../components/dashboardcomps/fund/Fund";
import Withdraw from "../../../components/dashboardcomps/withdraw/Withdraw";
import Invest from "../../../components/dashboardcomps/invest/Invest";

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
