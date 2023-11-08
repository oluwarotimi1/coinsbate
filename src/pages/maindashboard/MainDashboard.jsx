import React  from "react";
import styles from "./maindashboard.module.css";
import BuySection from "../../components/dashboardpage/buysection/BuySection";
import Marquee from "react-fast-marquee";
import DashboardNav from "../../components/dashboardnav/DashboardNav";
import Orders from "../../components/dashboardpage/orders/Orders";
import PortfoilioSection from "../../components/dashboardpage/portfoiliosection/PortfoilioSection";
import { useQuery } from "@tanstack/react-query";
import { getBtc } from "../../components/api/getApi";




const MainDashboard = () => {
 

      const postsQuery = useQuery({
        queryKey: ["btc"],
        queryFn: getBtc,
        refetchInterval: 1000,
      });



  return (
    <div className={styles.container}>
      <section className={styles.main_dashboard}>
        <nav >
          <DashboardNav />
        </nav>
        <header className={styles.main_dashboard_header}>
          <Marquee >
            BTC:  {postsQuery.data && (
                  <span style={{ color: "green" }}>
                    {" "}
                    ${postsQuery.data.USD.last}
                  </span>
                )}
          </Marquee>
        </header>
        <main>
          <BuySection />
          <div>
        <Orders />
        <PortfoilioSection />
          </div>
        </main>
      </section>
    </div>
  );
};

export default MainDashboard;
