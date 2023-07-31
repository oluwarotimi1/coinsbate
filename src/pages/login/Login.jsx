import React, { useContext, useState } from "react";
import styles from "./login.module.css";
// import { Container } from "react-bootstrap";
import MyBtn from "../../components/buttons/MyBtn";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SnackBar from "../../components/snackbar/SnackBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase/firebase";
import { UserContext } from "../../components/context/UserContext";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress } from "@mui/material";

const Login = () => {
  // const { setIsLoggedIn } = useContext(UserContext);
  const [loading, setIsLoading] = useState(false);
  const { logIn, loadingUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate("");

  const toggleShowPassword = () => {
    setShowPassword((prevShowEyes) => !prevShowEyes);
  };
  const schema = yup.object({
    email: yup.string().email().required("Enter Email Address"),
    password: yup.string().required("Password feild is empty"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        localStorage.setItem("token", user.uid);
        localStorage.setItem("isLoggedIn", true);
        logIn();
        navigate("/dashboard");
      })
      .then(() => {
        setMessage("Success");
        setSeverity("success");
        setOpen(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
        setSeverity("error");
        setOpen(true);
      });
    setIsLoading(false);
  };
  if(loadingUser){
    return (
      <div
        style={{
          height: "100vh",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <CircularProgress size={30} style={{ color: "var(--color-primary)" }} />
      </div>
    )
  }
  return (
    <div className={`${styles.login_container} `}>
      <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login_section}>
          <h1 style={{ textAlign: "center" }}>Log in</h1>
          <div className={styles.login_email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className={styles.email_input}
              {...register("email", { required: true })}
            />
            <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
              <span style={{ color: "red" }}>{errors?.email?.message}</span>
            </p>
          </div>
          <div className={styles.login_password}>
            <div className={styles.login_password_label}>
              <label htmlFor="email">Password</label>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "var(--color-primary)",
                }}
              >
                Forgot Password?
              </Link>
            </div>

            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={styles.password_input}
                {...register("password", { required: true })}
              />
              <span onClick={toggleShowPassword}>
                {showPassword ? (
                  <AiFillEye className={styles.login_eye} size={22} />
                ) : (
                  <AiFillEyeInvisible className={styles.login_eye} size={22} />
                )}
              </span>
            </div>
            <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
              <span style={{ color: "red" }}>{errors?.password?.message}</span>
            </p>
          </div>
          {loading ? (
            <MyBtn
              children={
                <CircularProgress
                  size={25}
                  style={{
                    color: "var(--color-primary)",
                    textAlign: "center",
                    
                  }}
                  
                />
              }
              style={{ width: "100%", marginTop: "2rem", padding: "14px",cursor: "not-allowed", }}
              type="submit"
            />
          ) : (
            <MyBtn
              children="Login"
              style={{ width: "100%", marginTop: "2rem", padding: "14px" }}
              type="submit"
            />
          )}
        </div>

        <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
          Don’t have an account?{" "}
          <Link
            to="/sign-up"
            style={{
              textDecoration: "none",
              color: "var(--color-primary)",
              fontSize: "1rem",
            }}
          >
            Create an account
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

export default Login;
