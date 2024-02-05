import React, { useEffect, useState } from 'react'
import styles from './sendmoneybank.module.css'
import SendMoneyTab from './sendmoneytabs/SendMoneyTab'

const SendMoneyBank = () => {
    const [activeTabSend, setActiveTabSend] = useState("inputMoney");
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className={styles.container}>
        <SendMoneyTab  activeTabSend={activeTabSend} setActiveTabSend={setActiveTabSend}/>
    </section>
  )
}

export default SendMoneyBank
