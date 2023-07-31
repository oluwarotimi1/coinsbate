import React, { useState } from "react";
import Tabs from "./tabs/Tabs";
import styles from "./signup.module.css";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div className={styles.signup_container}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default SignUp;
