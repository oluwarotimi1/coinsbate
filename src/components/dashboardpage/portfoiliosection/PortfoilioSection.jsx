import React, { useContext }  from "react";
import styles from "./portfolio.module.css";
import { UserContext } from "../../context/UserContext";

const PortfoilioSection = () => {
  const {user} = useContext(UserContext)
  return (
    <div className={styles.portfolio_container}>
      Hello {user?.displayName}, This site is still currently under Maintenance
    </div>
  );
};

export default PortfoilioSection;
