import React from "react";
import styles from "./buysection.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { App } from "../buymodal/MyVerticallyCenteredModal";

const BuySection = () => {
  return (

    
    <div className={`${styles.buysection_container} container mt-3`}>
      <Container>
        <Row >
          <Col sx={6} className={styles.buysection_colone}>
            <h4 style={{ fontWeight: 200 }}>
              <PiCurrencyBtcFill size={25} style={{ marginRight: "10px" }} />
              Ready to buy your first crypto?
            </h4>
          </Col>
          <Col sx={6} className={styles.buysection_coltwo}>
            {/* <button >Buy Crypto</button> */}
            <App  title="Buy Crypto"/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default BuySection;
