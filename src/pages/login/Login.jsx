import React, { useEffect, useRef, useState } from "react";
import styles from "./login.module.css";
// import { Container } from "react-bootstrap";
import MyBtn from "../../components/buttons/MyBtn";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
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
    <div className={styles.login_container}>
      <form className={styles.login_form}>
        <div className={styles.login_section}>
          <h1 style={{ textAlign: "center" }}>Log in</h1>
          <div className={styles.login_email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className={styles.email_input}
              ref={emailInputRef}
            />
          </div>
          <div className={styles.login_password}>
            <div className={styles.login_password_label}>
            <label htmlFor="email">Password</label>
            <Link to="" style={{textDecoration: 'none', color: 'var(--color-primary)'}}>Forgot Password?</Link>
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
                  <AiFillEye className={styles.login_eye} size={22} />
                ) : (
                  <AiFillEyeInvisible className={styles.login_eye} size={22} />
                )}
              </span>
            </div>
          </div>
          <MyBtn
            children="Login"
            style={{ width: "100%", marginTop: "2rem", padding: "14px" }}
          />
        </div>

        <p style={{margin: '1rem 0', fontSize: '0.87rem'}}>Don’t have an account? <Link to="/sign-up" style={{textDecoration: 'none', color: 'var(--color-primary)', fontSize: '1rem'}}>Create an account</Link></p>
      </form>
    </div>
  );
};

export default Login;
