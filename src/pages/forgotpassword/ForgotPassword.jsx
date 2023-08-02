import React, { useState } from "react";
import styles from "./forgotpassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import SnackBar from "../../components/snackbar/SnackBar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { auth } from "./../../auth/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

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

  const onSubmit = async (data) => {
    setLoading(true);
    await sendPasswordResetEmail(auth, data.email)
      .then(() => {
        setOpen(true);
        setMessage(
          `A Reset Link has been sent to ${email}. Check your inbox or spam folder to reset password.`
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
    <div className={styles.forgot_password_container}>
      <form
        className={styles.forgot_password_section}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 style={{ textAlign: "center" }}>Forgot Password</h1>
        <div className={styles.forgot_password_email}>
          <label htmlFor="verify">Email</label>
          <input
            type="text"
            name="email"
            className={styles.email_input}
            {...register("email", { required: true })}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ margin: "0.5rem 0", fontSize: "0.87rem" }}>
            <span style={{ color: "red" }}>{errors?.email?.message}</span>
          </p>
          <p
            style={{
              margin: "1px 0",
              fontSize: "0.87rem",
              color: "var(--color-primary)",
            }}
          >
            A reset link will be sent to the provided email{" "}
          </p>
        </div>
        {loading ? (
          <button
            style={{
              width: "100%",
              marginTop: "0.5rem",
              padding: "14px",
              cursor: "not-allowed",
            }}
            className={styles.create_proceed_btn}
            type="submit"
          >
            Recover Password
          </button>
        ) : (
          <button
            style={{ width: "100%", marginTop: "0.5rem", padding: "14px" }}
            className={styles.create_proceed_btn}
            type="submit"
          >
            Recover Password
          </button>
        )}

        <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
          Remember Password?
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "var(--color-primary)",
              fontSize: "1rem",
            }}
          >
            Login Here
          </Link>
        </p>
      </form>
      <SnackBar
        severity={severity}
        open={open}
        setOpen={setOpen}
        message={message}
      />
    </div>
  );
};

export default ForgotPassword;
