import React from "react";
import styles from "./buysection.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { PiCurrencyBtcFill } from "react-icons/pi";

const BuySection = () => {
  return (

    
    <div className={`${styles.buysection_container} container mt-3`}>
      <Container>
        <Row >
          <Col sx={6} className={styles.buysection_colone}>
            <h4 style={{ fontWeight: 200 }}>
              <PiCurrencyBtcFill size={25} style={{ marginRight: "10px" }} />
              Ready to invest?
            </h4>
          </Col>
          <Col sx={6} className={styles.buysection_coltwo}>
            {/* <App  title="Buy Crypto"/> */}

            <a href="#invest" className={styles.invest_btn}>Invest Here</a>
          </Col>
        </Row>
      </Container> 
      
    </div>
  );
};

export default BuySection;
