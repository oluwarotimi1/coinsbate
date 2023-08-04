import React, { useEffect, useState } from "react";
import Tabs from "./tabs/Tabs";
import styles from "./signup.module.css";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("create");
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.signup_container}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default SignUp;
