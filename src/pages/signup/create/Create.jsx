import React from "react";
import styles from "./create.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Create = ({ setActiveTab }) => {
  const navigate = useNavigate("");
  const handleProceedClick = () => {
    setActiveTab("signupform");
  };
  const handleBackClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.create_container}>
      <span className={styles.create_back} onClick={handleBackClick}>
        <TbArrowBackUp size={22} />
        <span></span>
      </span>

      <div className={styles.create_top}>
        <h1>Create an account</h1>
      </div>

      <label className={styles.create_label}>
        <input type="radio" name="account" value="personal" checked />
        <div>
          <h5>Personal Account</h5>
          <span>Daily Transfer Limit - ₦2M</span>
          <br />
          <span>Single Withdrawal Limit - ₦1M</span>
        </div>
        <BsPersonCircle size={22} />
      </label>
      <label className={styles.create_label}>
        <input type="radio" name="account" value="business" />
        <div>
          <h5>Business Account</h5>
          <span>Daily Transfer Limit - ₦5M</span>
          <br />
          <span>Single Withdrawal Limit - ₦10M</span>
        </div>
        <MdAddBusiness size={22} />
      </label>
      <button
        onClick={handleProceedClick}
        style={{ width: "100%", marginTop: "2rem", padding: "14px" }}
        className={styles.create_proceed_btn}
      >
        Proceed
      </button>
    </div>
  );
};

export default Create;
