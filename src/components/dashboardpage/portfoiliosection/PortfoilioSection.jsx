import React, { useContext, useEffect, useState } from 'react'
import styles from './portfolio.module.css'
import {UserContext} from './../../context/UserContext'

const PortfoilioSection = () => {
  const {user} = useContext(UserContext);
  const verifiedStatus = user?.verified
  const [verifiedUser, setVerifiedUser] = useState("Not Verified");

  useEffect(()=>{
    if(verifiedStatus === true){
      setVerifiedUser("Verifed")
    }else {
      // doc.data() will be undefined in this case
      
      // console.log("No such document!");
    }
  },[verifiedStatus])
  return (
    <div className={styles.portfolio_container}>
      Portfoilio section <br />
      Display Name: {user?.displayName}<br />
      {/* Verified Status: {verifiedStatus.toString()} */}
      Verification Status : {verifiedUser}
    </div>
  )
}

export default PortfoilioSection
