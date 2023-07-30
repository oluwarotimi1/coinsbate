import React from "react";
import styles from "./signupform.module.css";
const SignUpForm = ({ setActiveTab }) => {
  const handleBack = () => {
    setActiveTab("create");
  };
  const handleNext = () => {
    setActiveTab("verification");
  };
  return (
    <form className={styles.signupform_container}>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next - Sign up</button>
    </form>
  );
};

export default SignUpForm;
