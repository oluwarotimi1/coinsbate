import React, { useContext, useState } from "react";
import styles from "./signupform.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../auth/firebase/firebase";
import SnackBar from "../../../components/snackbar/SnackBar";
import { UserContext } from "../../../components/context/UserContext";
import { CircularProgress } from "@mui/material";
import MyBtn from "../../../components/buttons/MyBtn";

const SignUpForm = ({ setActiveTab }) => {
  const { logIn } = useContext(UserContext);
  const { setIsLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
  // min 4 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const handleBack = () => {
    setActiveTab("create");
  };
  function wait(duration){
    return new Promise((resolve)=>setTimeout(resolve, duration));
  }
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowEyes) => !prevShowEyes);
  };

  const schema = yup.object({
    displayName: yup.string().required("Diasplay Name is required"),
    email: yup.string().email().required("Enter Email Address"),
    password: yup.string().required("Password field is empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function success(){
    wait(2000).then(()=>{
      setActiveTab("verification")
    })
  }

  const onSubmit = async (data) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          displayName: data.displayName,
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          uid: user.uid,
          verified: false,
          role: "user",
        })
          .then(() => {
            setIsLoggedIn(true);
            localStorage.setItem("token", user.uid);
            localStorage.setItem("isLoggedIn", true);
            logIn();
            setMessage("Account Successfully Created");
            setSeverity("success");
            setOpen(true);
            success();
          })
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        setSeverity("error");
        setOpen(true);
        setLoading(false);
      });
  };

  return (
    <div className={styles.signupform_container}>
      <span className={styles.create_back} onClick={handleBack}>
        <TbArrowBackUp size={22} />
        <span></span>
      </span>
      <form className={styles.signup_section} onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <div className={styles.signup_email}>
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
              {...register("password", { required: true })}
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
          <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
            <span style={{ color: "red" }}>{errors?.password?.message}</span>
          </p>
        </div>
        <div className={styles.signup_email}>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            className={styles.email_input}
            {...register("displayName", { required: true })}
          />
          <p style={{ margin: "1rem 0", fontSize: "0.87rem" }}>
            <span style={{ color: "red" }}>{errors?.displayName?.message}</span>
          </p>
        </div>
        <div className={styles.signup_email}>
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            name="number"
            className={styles.email_input}
            {...register("phoneNumber", { required: false })}
          />
        </div>
        {loading ? (
            <MyBtn
              children={
                <CircularProgress
                  size={22}
                  style={{
                    color: "var(--color-primary)",
                    textAlign: "center",
                    
                  }}
                  
                />
              }
              style={{ width: "100%", marginTop: "2rem", padding: "14px",cursor: "not-allowed", }}
              type="submit"
            />
          )  : (
          <input
            style={{ width: "100%", marginTop: "2rem", padding: "14px" }}
            className={styles.create_proceed_btn}
            type="submit"
          />
        )}
      </form>

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
      <SnackBar
        severity={severity}
        open={open}
        setOpen={setOpen}
        message={message}
      />
    </div>
  );
};

export default SignUpForm;
