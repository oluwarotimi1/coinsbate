import React from "react";
import BuySection from '../../../components/dashboardpage/buysection/BuySection'
import PortfoilioSection from '../../../components/dashboardpage/portfoiliosection/PortfoilioSection'
import Dashboardfunds from "../../dashboardpage/dashboardfunds/Dashboardfunds";

const Dash = () => {
  return (
    <div>
      <div>
        <BuySection />
        <div>
          <Dashboardfunds />
          {/* <Orders /> */}
          <PortfoilioSection />
        </div>
      </div>
    </div>
  );
};

export default Dash;
