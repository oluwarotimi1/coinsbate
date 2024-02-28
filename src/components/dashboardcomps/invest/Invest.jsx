import React from "react";
import { Container } from "react-bootstrap";
import styles from "./invest.module.css";
const Invest = () => {
  return (
    <section>
      <div className={styles.invest_section}>
        <Container>
          <div className={styles.start_invest}>
            <h3 className="pb-4"> START YOUR CRYPTO INVESTMENT TODAY</h3>
            <h5>GROW YOUR CAPITAL WITH COINPRIXM INVESTMENT COMPANY</h5>
            <h6>
              Coinprixm Investment Company is the brand new online earning
              platform made for everyone, so even unexperienced investors are
              successfully making a profit. Our program, unlike any other,
              guarantees fix interest for investors regardless of market
              conditions.
            </h6>
            <button className={styles.AddNewBalance_proceed}>Invest Now</button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Invest;
