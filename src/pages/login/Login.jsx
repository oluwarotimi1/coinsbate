import React, { useState } from 'react'
import styles from './login.module.css'

const Login = () => {
const [password, setPassword] = useState('')
const [showPassword, setShowPassword] = useState(false)
// const handleChange = (e) =>{
//   setPassword(e.target.value);
// };
const toggleShowPassword = ()=>{
  setShowPassword((prevPassword)=> !prevPassword)
}
  return (
    <div className={styles.login_container}>
      {/* <input type="text" name={name} onChange={(e)=> setName(e.target.value)}/> */}
      <input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} value={password} />
      <button  onClick={toggleShowPassword} >
        eye
      </button>
    </div>
  )
}

export default Login


































