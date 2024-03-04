import React, { useEffect, useState } from 'react'
import styles from './paymentbybtc.module.css'
import { Container } from 'react-bootstrap'
import PaymentByBtcTabs from '../../../components/pbbtabs/PaymentByBtcTabs'

const PaymentByBtc = () => {
    const [activeTabBtc, setActiveTabBtc] = useState("amount")
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className={styles.PaymentByBtc_section}>
        <Container className={styles.PaymentByBtc_container}>
        <PaymentByBtcTabs activeTabBtc={activeTabBtc} setActiveTabBtc={setActiveTabBtc}/>
        </Container>
    </section>
  )
}

export default PaymentByBtc
