import React, { useContext, useState } from "react";
import styles from "./verification.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../components/context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SnackBar from "../../../components/snackbar/SnackBar";
import { auth } from "../../../auth/firebase/firebase";
import { sendEmailVerification } from "firebase/auth";

const Verification = () => {
  const {user} =useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
  const schema = yup.object({
    email: yup.string().email().required("Enter Email Address"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function success() {
    wait(8000).then(() => {
      navigate("/login");
    });
  }

  const onSubmit = async () => {
    setLoading(true);
    await sendEmailVerification(auth.currentUser)
      .then(() => {
        setOpen(true);
        setMessage(
          `A Reset Link has been sent to ${user.email}. Check your inbox or spam folder to reset password.`
        );
        setSeverity("success");
        success();
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setSeverity("error");
        setOpen(true);
        setMessage(errorMessage);
      });
      setLoading(false);
  };
  return (
    <div className={styles.verification_container}>
      <form className={styles.verification_section} onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ textAlign: "center" }}>Verification</h1>
        <div className={styles.verification_email}>
          <label htmlFor="verify">Email</label>
          <input
            type="text"
            name="email"
            className={styles.email_input}
            {...register("email", {required: true})}
            value={user.email}
          />
          <p style={{ margin: "0.5rem 0", fontSize: "0.87rem" }}>
            <span style={{ color: "red" }}>{errors?.email?.message}</span>
          </p>
          <p style={{ margin: "1rem 0", fontSize: "0.87rem", color: 'var(--color-primary)' }}>
            Verification Link will be sent to this email
          </p>
          
        </div>
        {
          loading? <button
          style={{ width: "100%", marginTop: "0.5rem", padding: "14px", cursor: 'not-allowed' }}
          className={styles.create_proceed_btn}
          type="submit"
        >
         Send Verification Email
        </button>:
        <button
        style={{ width: "100%", marginTop: "0.5rem", padding: "14px" }}
        className={styles.create_proceed_btn}
        type="submit"
      >
       Send Verification Email
      </button>
        }
        
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
      </form>
      <SnackBar 
      severity={severity}
      open={open}
      setOpen={setOpen}
      message={message}/>
    </div>
  );
};

export default Verification;
