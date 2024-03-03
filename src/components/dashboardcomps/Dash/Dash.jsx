import React from "react";
import BuySection from '../../../components/dashboardpage/buysection/BuySection'
import Orders from '../../../components/dashboardpage/orders/Orders'
import PortfoilioSection from '../../../components/dashboardpage/portfoiliosection/PortfoilioSection'
import Dashboardfunds from "../../dashboardpage/dashboardfunds/Dashboardfunds";

const Dash = ({activeDashboard, setActiveDashboard}) => {
  return (
    <div>
      <div>
        <BuySection />
        <div>
          <Dashboardfunds />
          <Orders />
          <PortfoilioSection />
        </div>
      </div>
    </div>
  );
};

export default Dash;
