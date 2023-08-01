import React from "react";
import styles from "./dashboard.module.css";
import BuySection from "../../components/dashboardpage/buysection/BuySection";
import PortfoilioSection from "../../components/dashboardpage/portfoiliosection/PortfoilioSection";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
  const getPost = [{ id: 1 }];
  const loadDashboard = useQuery({
    queryKey: ["load"],
    queryFn: () => wait(5000).then(() => [...getPost]),
  });
  if (loadDashboard.isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Getting Account Information...</p>
        <br />
        {/* <CircularProgress size={30} style={{ color: "var(--color-primary)" }} /> */}
      </div>
    );
  }
  if (loadDashboard.isError) {
    return <h1>Error getting dashboard information</h1>;
  }
  return (
    <div className={styles.dashboard_container}>
      <div className={`${styles.dashboard_section}container`}>
        <BuySection />
        <PortfoilioSection />
      </div>
    </div>
  );
};

export default Dashboard;
