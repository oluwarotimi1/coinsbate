import React, { useEffect, useRef } from "react";
import styles from "./verification.module.css";
import { Link, useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef(null);

  const handleVerify = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  return (
    <div className={styles.verification_container}>
      <div className={styles.verification_section}>
        <h1 style={{ textAlign: "center" }}>Verification</h1>
        <div className={styles.verification_email}>
          <label htmlFor="verify">Email</label>
          <input
            type="text"
            name="email"
            className={styles.email_input}
            ref={emailInputRef}
          />
          <p style={{ margin: "1rem 0", fontSize: "0.87rem", color: 'var(--color-primary)' }}>
            Verification Link will be sent to this email{" "}
          </p>
        </div>
        <button
          onClick={handleVerify}
          style={{ width: "100%", marginTop: "0.5rem", padding: "14px" }}
          className={styles.create_proceed_btn}
          type="submit"
        >
          Verifiy Email
        </button>
        <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
          Verify Email Later,
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "var(--color-primary)",
              fontSize: "1rem",
            }}
          >
             Skip Verification
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Verification;
