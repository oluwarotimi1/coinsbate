import React, { useContext } from "react";
import styles from "./dashboardnav.module.css";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const { user } = useContext(UserContext);
  return (
    <section className={styles.main_dashboard_nav}>
      <div className={styles.dashboardnav_container}>
        <h4> Welcome, {user?.displayName}</h4>
        <div>
          <ul>
            <li>
              <Link> Dashboard</Link>
            </li>
            <li>
              <Link> Fund Your Account</Link>
            </li>
            <li>
              <Link> Withdraw Funds </Link>
            </li>
            <li>
              <Link> Transaction History </Link>
            </li>
            <li>
              <Link> Invest</Link>
            </li>
            <li>
              <Link> Refer Users </Link>
            </li>
            <li>
              <Link> Help/Support </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardNav;
