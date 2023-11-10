import React, { useState } from "react";
import styles from "./maindashboard.module.css";
import Marquee from "react-fast-marquee";
import DashboardNav from "../../components/dashboardnav/DashboardNav";
import { useQuery } from "@tanstack/react-query";
import { getBtc } from "../../components/api/getApi";
import TabsDashboard from "./tabsdashboard/TabsDashboard";

const MainDashboard = () => {

  const [activeDashboard, setActiveDashboard] = useState("dash")

  const postsQuery = useQuery({
    queryKey: ["btc"],
    queryFn: getBtc,
    refetchInterval: 1000,
  });

  return (
    <div className={styles.container}>
      <section className={styles.main_dashboard}>
        <nav>
          <DashboardNav activeDashboard={activeDashboard} setActiveDashboard={setActiveDashboard}/>
        </nav>
        <header className={styles.main_dashboard_header}>
          <Marquee>
            BTC:{" "}
            {postsQuery.data && (
              <span style={{ color: "green" }}>
                {" "}
                ${postsQuery.data.USD.last}
              </span>
            )}
          </Marquee>
        </header>
        <main>
          <TabsDashboard activeDashboard={activeDashboard} setActiveDashboard={setActiveDashboard} />
        </main>
      </section>
    </div>
  );
};

export default MainDashboard;
