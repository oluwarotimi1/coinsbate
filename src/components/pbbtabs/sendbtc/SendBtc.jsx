import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './sendbtc.module.css'
import btcImage from '../../../assets/btc_image.png'

const SendBtc = ({ setActiveTabBtc }) => {
  const handleConfirmAmount =()=>{
    setActiveTabBtc("confirmamount");
  }
  const handleSentBtc =()=>{
    setActiveTabBtc("sendbtc")
  }
  return (
    <div>
      <Container  className={styles.ammt_container}>
      <form className={styles.ammt_form}>

        <div className={styles.ammt_form_div}>
          <img src={btcImage} alt=""  width="50px" height="50px"/>
          
        </div>
        </form>

        <span className={styles.ammt_btns}>
        <button className={styles.ammt_btn} onClick={handleConfirmAmount}>Back</button>
        <button className={styles.ammt_btn} onClick={handleSentBtc}>Next</button>

        </span>
      </Container>
    </div>
  )
}

export default SendBtc
