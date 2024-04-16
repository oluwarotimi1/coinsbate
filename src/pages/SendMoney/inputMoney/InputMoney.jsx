import React, { useContext } from "react";
import styles from "./inputmoney.module.css";
import { Container } from "react-bootstrap";
import { CiDollar } from "react-icons/ci";
import { UserContext } from "../../../components/context/UserContext";

const InputMoney = ({ setActiveTabSend }) => {
  const handleContinue = () => {
    setActiveTabSend("recipient");
  };

  const {user} = useContext(UserContext)

  return (
    <Container>
      <div className={styles.inputmoney_topic}>
        <h2>Send to a bank account</h2>
        <h6>Enter amount to send to send recipient</h6>
      </div>
      <div className={styles.inputmoney_container}>
        <div className={styles.inputmoney_balance}>
          <div className={styles.inputmoney_balance_div_one}>
            <span style={{ color: "green" }}>
              <CiDollar />
            </span>
            <span>Current Balance</span>
          </div>
          <div>${user?.depositBalance}</div>
        </div>

        <div>
          <h5
            style={{
              margin: "0.5rem 0rem",
              fontSize: "18px",
              fontWeight: "300",
            }}
          >
            Amount to send:
          </h5>
          <div className={styles.input_currency}>
            <div className={styles.label_and_input}>
              <label
                htmlFor="currencySelector"
                className={styles.label_currency}
              >
                <select
                  name="currency"
                  id="currencyId"
                  className={styles.select_currency}
                >
                  <option value="ngn" selected>
                    Dollar
                  </option>
                  <option value="dollar">Dollar</option>
                  <option value="crypto">USDT</option>
                  <option value="btc">BTC</option>
                  <option value="mobile">Airtime/Data</option>
                </select>
              </label>
              <input
                type="number"
                className={styles.input_currency_amount}
                placeholder="Enter Amount"
                inputMode="numeric"
                pattern="[0-9]*"
              />
            </div>
            <div className={styles.inputmoney_fee}>
              <div>
                <span>Conversion</span>
                <span>-N0</span>
              </div>
              <div>
                <span>Send Fee</span>
                <span>-N0</span>
              </div>
              <div >
                <span style={{color:'black'}} >Amount we'll send</span>
                <span style={{color:'black'}}>-N0</span>
              </div>
              <div>
                <span>Today's rate</span>
                <span>X N0</span>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleContinue} className={styles.inputmoney_btn_continue}>Continue</button>
      </div>
    </Container>
  );
};

export default InputMoney;
