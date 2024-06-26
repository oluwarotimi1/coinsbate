import React, { useState } from "react";
import styles from "./maindashboard.module.css";
import Marquee from "react-fast-marquee";
import DashboardNav from "../../components/dashboardnav/DashboardNav";
import { useQuery } from "@tanstack/react-query";
import { getBtc } from "../../components/api/getApi";
import TabsDashboard from "./tabsdashboard/TabsDashboard";
import InvestmentPlan from "../../components/dashboardcomps/invest/investmentplan/InvestmentPlan";
import PortfoilioSection from "../../components/dashboardpage/portfoiliosection/PortfoilioSection"

const MainDashboard = () => {
  const [activeDashboard, setActiveDashboard] = useState("dash");

  const postsQuery = useQuery({
    queryKey: ["btc"],
    queryFn: getBtc,
    refetchInterval: 1000,
  });

  return (
    <div className={styles.container}>
      <section className={styles.main_dashboard}>
        <nav>
          <DashboardNav
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
          />
        </nav>
        <header className={styles.main_dashboard_header}>
          <Marquee>
            <span style={{ padding: "0rem 1rem " }}>
              NOTE: Price can be affected by market volatility and can change. Updates still incoming! <span style={{ color: "red"}}></span> 
            </span>
            <span>
            BTC:{" "}
            {postsQuery.data && (
              <span style={{ color: "green", padding: "0rem 2rem 0rem 0rem" }}>
                {" "}
                ${postsQuery.data.USD.last}
              </span>
            )}
            </span>
            {/* USDT:{" "}
            {postsQuery.data && (
              <span style={{ color: "green", padding: "0rem 2rem 0rem 0rem" }}>
                {" "}
                N1180.89
              </span>
            )} */}
            
          </Marquee>
        </header>
        <main>
          <TabsDashboard
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
          />
        </main>
      </section>
      <InvestmentPlan />
      <PortfoilioSection/>
    </div>
  );
};

export default MainDashboard;
