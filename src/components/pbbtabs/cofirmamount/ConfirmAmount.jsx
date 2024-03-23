import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './cofirmamount.module.css'
import btcImage from '../../../assets/btc_image.png'

const ConfirmAmount = ({ setActiveTabBtc }) => {

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

        <div>
          <img src={btcImage} alt=""  width="50px" height="50px"/>
          <h6>Amount : </h6>
          <h6>Charge</h6>
          <h6>Payable: </h6>
          <h6>Conversion Rate: 1 USD = 1 USD </h6>
          <h6> In USD: 200</h6>
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
