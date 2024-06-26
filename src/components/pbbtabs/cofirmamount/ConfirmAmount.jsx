import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './cofirmamount.module.css'
import btcImage from '../../../assets/btc_image.png'

const ConfirmAmount = ({ setActiveTabBtc, inputData }) => {

  const handleSendBtc =()=>{
    setActiveTabBtc("sendbtc");
  }
  const handleAmount =()=>{
    setActiveTabBtc("amount")
  }
  return (
    <div>
      <Container  className={styles.ammt_container}>
      <form className={styles.ammt_form}>

        <div className={styles.ammt_form_div}>
          <img src={btcImage} alt=""  width="50px" height="50px"/>
          <h6>Amount : {inputData}</h6>
          <h6>Charge : 0 USD</h6>
          <h6>Payable: {inputData}</h6>
          <h6>Conversion Rate: 1 USD = 1 USD </h6>
          <h6> In USD: {inputData} </h6>
        </div>
        <span className={styles.ammt_btns}>
        <button className={styles.ammt_btn} onClick={handleAmount}>Back</button>
        <button className={styles.ammt_btn} onClick={handleSendBtc} type='submit'>Next</button>

        </span>
        </form>

        
      </Container>
    </div>
  )
}

export default ConfirmAmount
