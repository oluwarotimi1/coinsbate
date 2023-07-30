import React, { useEffect, useRef, useState } from "react";
import styles from "./signupform.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const SignUpForm = ({ setActiveTab }) => {
  const handleBack = () => {
    setActiveTab("create");
  };
  const handleNext = () => {
    setActiveTab("verification");
  };

  const emailInputRef = useRef(null);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowEyes) => !prevShowEyes);
  };

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);
  return (
    <div className={styles.signupform_container}>
      <span className={styles.create_back} onClick={handleBack}>
        <TbArrowBackUp size={22} />
        <span></span>
      </span>
      <div className={styles.signup_section}>
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <div className={styles.signup_email}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className={styles.email_input}
            ref={emailInputRef}
          />
        </div>
        <div className={styles.signup_password}>
          <div className={styles.signup_password_label}>
            <label htmlFor="email">Password</label>
          </div>

          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={styles.password_input}
              value={password}
              onChange={handleChange}
            />
            <span onClick={toggleShowPassword}>
              {showPassword ? (
                <AiFillEye className={styles.signup_eye} size={22} />
              ) : (
                <AiFillEyeInvisible className={styles.signup_eye} size={22} />
              )}
            </span>
          </div>
        </div>
        <div className={styles.signup_email}>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            className={styles.email_input}
          />
        </div>
        <div className={styles.signup_email}>
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            name="number"
            className={styles.email_input}
          />
        </div>
        <button
        onClick={handleNext}
        style={{ width: "100%", marginTop: "2rem", padding: "14px" }}
        className={styles.create_proceed_btn}
        type="submit"
      >
        Proceed
      </button>
      </div>

      <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "var(--color-primary)",
            fontSize: "1rem",
          }}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
