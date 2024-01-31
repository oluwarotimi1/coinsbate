import React from "react";
import { Container } from "react-bootstrap";
import styles from "./fund.module.css";
import { AddNewBalanceButton } from "./addnew/AddNewBalance";

const Fund = () => {
  return (
    <section className={styles.fund_section}>
      <Container className={styles.fund_container}>
        <div className={styles.funds_balance}>
          <h5>My Balances</h5>
          <AddNewBalanceButton name="Add New Balance"/>
        </div>

        <div className={styles.funds_transfer_section}>
          <div>Currencies</div>
          <div>Currencies</div>
          <div>Currencies</div>
        </div>
      </Container>
    </section>
  );
};

export default Fund;
