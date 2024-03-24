import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './cofirmamount.module.css'
import btcImage from '../../../assets/btc_image.png'

const ConfirmAmount = ({ setActiveTabBtc, inputAmount }) => {

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
          <h6>Amount : {inputAmount}</h6>
          <h6>Charge</h6>
          <h6>Payable: </h6>
          <h6>Conversion Rate: 1 USD = 1 USD </h6>
          <h6> In USD: </h6>
        </div>
        </form>

        <span className={styles.ammt_btns}>
        <button className={styles.ammt_btn} onClick={handleAmount}>Back</button>
        <button className={styles.ammt_btn} onClick={handleSendBtc}>Next</button>

        </span>
      </Container>
    </div>
  )
}

export default ConfirmAmount
