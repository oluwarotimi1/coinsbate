import React, { useState } from "react";
import styles from "./amount.module.css";
import { Container } from "react-bootstrap";
import btcImage from "../../../assets/btc_image.png";

const Amount = ({ setActiveTabBtc, setInputData }) => {
  const [inputAmount, setInputAmount] = useState("");

  const handleAmount = (event) => {
    setInputAmount(event.target.value);
  };

  const handleConfirmAmount = () => {
    setActiveTabBtc("confirmamount");
    setInputData(inputAmount);
    console.log(inputAmount)
  };
 
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleConfirmAmount(); // Call function to handle confirmation
  };

  return (
    <div>
      <Container className={styles.ammt_container}>
        <img src={btcImage} alt="" width="50px" height="50px" />
        <form onSubmit={onSubmit} className={styles.ammt_form}>
          <div>Payment By Bitcoin</div>

          <h5>Enter Amount</h5>
          <div className={styles.div_ammt_input}>
            <input
              className={styles.ammt_input}
              type="number"
              placeholder="0.00"
              name="amount"
              va
              value={inputAmount}
              onChange={handleAmount}
            />
            <span>USD</span>
          </div> 
          <span className={styles.ammt_btns}>
          <button className={styles.ammt_btn}>Back</button>
          <button className={styles.ammt_btn} type="submit" onClick={handleConfirmAmount}>
            Next
          </button>
        </span>
        </form>
        
      </Container>
    </div>
  );
};

export default Amount;
