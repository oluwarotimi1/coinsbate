import React from "react";
import styles from "./order.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { App } from "../buymodal/MyVerticallyCenteredModal";
import Nav from "react-bootstrap/Nav";

const Orders = () => {
  return (
    <div className={`${styles.ordersection_container} container mt-3`}>
      <Container>
        <Row>
          <Nav variant="tabs" defaultActiveKey="/dashboard">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Open Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Trade Orders </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" >
                Previous Transactions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col className={` ${styles.ordersection_col} pt-5`}>
            <h5 style={{ fontWeight: 200 }}>
              You don't have any completed orders.
            </h5>
          </Col>
        </Row>
        <Row>
          <Col className={styles.ordersection_col}>
            <App title="Buy Crypto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
