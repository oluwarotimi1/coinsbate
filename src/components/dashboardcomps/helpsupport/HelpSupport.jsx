import React from "react";
import styles from "./helpsupport.module.css";
const HelpSupport = () => {
  return (
    <div className={styles.help_container}>
      <h4>
        Contact us for help/support by sending us an email at
        coinsbate@gmail.com
      </h4>

      <button className={styles.btn_contact_us} onClick={() => (window.location = "mailto:coinsbate@gmail.com")}>
        Contact Us
      </button>
    </div>
  );
};

export default HelpSupport;
