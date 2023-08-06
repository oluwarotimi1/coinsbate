import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './prevtransactions.module.css'

const PrevTransaction = () => {
  return (
    <Container>
      <Row>
        <Col className={` ${styles.ordersection_col} pt-5`}>
          <h5 style={{ fontWeight: 200 }}>
            You don't have any completed orders.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default PrevTransaction;
