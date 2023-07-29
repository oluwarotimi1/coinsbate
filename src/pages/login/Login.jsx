import React from "react";
import styles from "./login.module.css";
// import { Container } from "react-bootstrap";
import MyBtn from "../../components/buttons/MyBtn";

const Login = () => {
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const handleChange = (e) =>{
  //   setPassword(e.target.value);
  // };
  // const toggleShowPassword = () => {
  //   setShowPassword((prevPassword) => !prevPassword);
  // };
  return (
    <div className={styles.login_container}>
      {/* <input type="text" name={name} onChange={(e)=> setName(e.target.value)}/>
      <input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} value={password} />
      <button  onClick={toggleShowPassword} >
        eye
      </button>
      hello */}
      <form className={styles.login_form}>
        <div className={styles.login_section}>
          <h1 style={{ textAlign: "center" }}>Log In</h1>
          <div className={styles.login_email}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className={styles.email_input} />
          </div>
          <div className={styles.login_password}>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              className={styles.password_input}
            />
          </div>
          <MyBtn children="Login" style={{width:'100%', marginTop: '2rem',padding: '14px'}}/>
        </div>
      </form>
    </div>
  );
};

export default Login;
