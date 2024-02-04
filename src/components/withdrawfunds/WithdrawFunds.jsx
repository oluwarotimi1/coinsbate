import React from "react";
import styles from "./withdraw.module.css";
import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdCurrencyExchange } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";

const WithdrawFunds = () => {
  return (
    <secion className={styles.withdrawSection_container}>
      <div className={styles.withdrawSection}>
        <div>
          <h5 className="pb-4">SEND MONEY</h5>
        </div>
        <div>
          <div className={styles.withdraw_col_one}>
            <Link className={styles.withdraw_link}>
              <span>
                <BsBank />
              </span>
              <span>
                <h5>Send to a bank account</h5>
                <p>
                  Use bank transfer to send to a new recipient or previous
                  recipient
                </p>
              </span>
            </Link>
          </div>
          <div className={styles.withdraw_col_one}>
            <Link className={styles.withdraw_link}>
              <span>
                <MdCurrencyExchange />
              </span>
              <span>
                <h5>Send to a crypto wallet</h5>
                <p>Instantly withdraw to a crypto wallet (Usdt, BTC e.t.c)</p>
              </span>
            </Link>
          </div>
          <div className={styles.withdraw_col_one}>
            <Link className={styles.withdraw_link}>
              <span>
                <MdPhoneIphone />
              </span>
              <span>
                <h5>Send to a Mobile Wallet</h5>
                <p>
                  Fund mobile wallet or buy airtime/data and other utility payment
                </p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </secion>
  );
};

export default WithdrawFunds;
