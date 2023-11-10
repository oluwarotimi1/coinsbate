import React, { useContext } from "react";
import styles from "./dashboardnav.module.css";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const DashboardNav = ({setActiveDashboard}) => {
  const { user } = useContext(UserContext);
  const handleDash =()=>{
    setActiveDashboard("dash")
  }
  const handleFund =()=>{
    setActiveDashboard("fund")
  }
  const handleWithdraw =()=>{
    setActiveDashboard("withdraw")
  }
  const handleTransaction =()=>{
    setActiveDashboard("transaction")
  }
  const handleInvest =()=>{
    setActiveDashboard("invest")
  }
  const handleRefer =()=>{
    setActiveDashboard("refer")
  }
  const handleHelp =()=>{
    setActiveDashboard("help")
  }
  return (
    <section className={styles.main_dashboard_nav}>
      <div className={styles.dashboardnav_container}>
        <h4> Welcome, {user?.displayName}</h4>
        <div>
          <ul>
            <li onClick={handleDash}>
              <Link> Dashboard</Link>
            </li>
            <li onClick={handleFund}>
              <Link> Fund Your Account</Link>
            </li>
            <li onClick={handleWithdraw}>
              <Link> Withdraw Funds </Link>
            </li>
            <li onClick={handleTransaction}>
              <Link> Transaction History </Link>
            </li>
            <li onClick={handleInvest}>
              <Link> Invest</Link>
            </li>
            <li onClick={handleRefer}>
              <Link> Refer Users </Link>
            </li>
            <li onClick={handleHelp}>
              <Link> Help/Support </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardNav;
