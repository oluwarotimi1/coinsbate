import React from 'react';
import styles from './inputmoney.module.css';

const InputMoney = ({ setActiveTabSend }) => {

  const handleContinue = () => {
    if (typeof setActiveTabSend === 'function') {
      setActiveTabSend="recipient";
    } else {
      console.error("setActiveTabSend is not a function");
    }
  };

  return (
    <div className={styles.inputmoney_container}>
      Enter Amount to send
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default InputMoney;
