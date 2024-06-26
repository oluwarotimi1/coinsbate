import React, { useContext, useState } from "react";
import styles from "./dashboardnav.module.css";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardNav = ({ setActiveDashboard }) => {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDash = () => {
    setActiveDashboard("dash");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleFund = () => {
    setActiveDashboard("fund");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleWithdraw = () => {
    setActiveDashboard("withdraw");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleTransaction = () => {
    setActiveDashboard("history");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleInvest = () => {
    setActiveDashboard("invest");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleRefer = () => {
    setActiveDashboard("refer");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleHelp = () => {
    setActiveDashboard("help");
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className={styles.main_dashboard_nav}>
      <div className={styles.dashboardnav_container}>
        <div className={styles.dashboard_navv}>
          <div>
            <h4 > Welcome, {user?.displayName}</h4>
          </div>

          <div className={styles.menuToggle} onClick={toggleMenu}>
            <div>
              {" "}
              <span className={styles.navbar_menu}>MENU</span>
             <span  className={styles.navbar_hamburger}> <GiHamburgerMenu size={20} /> </span>
            </div>
          </div>
        </div>

        <div className={styles.dashboard_nav}>
          <ul className={isMenuOpen ? styles.showMenu : ""}>
          <li onClick={handleInvest}>
              <Link> Invest</Link>
            </li>
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
