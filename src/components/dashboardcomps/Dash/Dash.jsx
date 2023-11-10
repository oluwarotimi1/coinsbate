import React from "react";
import BuySection from '../../../components/dashboardpage/buysection/BuySection'
import Orders from '../../../components/dashboardpage/orders/Orders'
import PortfoilioSection from '../../../components/dashboardpage/portfoiliosection/PortfoilioSection'

const Dash = () => {
  return (
    <div>
      <div>
        <BuySection />
        <div>
          <Orders />
          <PortfoilioSection />
        </div>
      </div>
    </div>
  );
};

export default Dash;
