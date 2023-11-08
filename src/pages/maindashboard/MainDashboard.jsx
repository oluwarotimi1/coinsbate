import React from "react";
import styles from "./maindashboard.module.css";
import BuySection from "../../components/dashboardpage/buysection/BuySection";
import Marquee from "react-fast-marquee";
import DashboardNav from "../../components/dashboardnav/DashboardNav";
import Orders from "../../components/dashboardpage/orders/Orders";
import PortfoilioSection from "../../components/dashboardpage/portfoiliosection/PortfoilioSection";


const MainDashboard = () => {

    // const getPrice=()=> {
    //     return axios.get("https://blockchain.info/ticker").then((res) => res.data)
    //     // console.log((res))
    //     ;
    //   }
  return (
    <div className={styles.container}>
      <section className={styles.main_dashboard}>
        <nav >
          <DashboardNav />
          {/* <button onClick={getPrice}>get</button> */}
        </nav>
        <header className={styles.main_dashboard_header}>
          <Marquee >
            Hello!
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
