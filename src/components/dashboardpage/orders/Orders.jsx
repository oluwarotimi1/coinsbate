import React, { useState } from "react";
import styles from "./order.module.css";
import { Col, Container, Row } from "react-bootstrap";
// import { App } from "../buymodal/MyVerticallyCenteredModal";
import Nav from "react-bootstrap/Nav";
import OrderTabs from "./ordersTab/ordersTabs";

const Orders = () => {
  const [activeRow, setActiveRow] = useState('openOrders')

  const activeChangeTransaction=()=>{
    setActiveRow("prevTransactions")
  }
  const activeChangeOrders=()=>{
    setActiveRow("openOrders")
  }

  return (
    <div className={`${styles.ordersection_container} container mt-3`}>
      <Container>
        <Row>
          <Nav variant="tabs" defaultActiveKey="link-1">
            <Nav.Item onClick={activeChangeOrders} active>
              <Nav.Link eventKey="link-1" >Open Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={activeChangeTransaction}>
              <Nav.Link eventKey="disabled" >
                Previous Transactions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <OrderTabs activeRow={activeRow} setActiveRow={setActiveRow} />
        <Row>
          <Col className={styles.ordersection_col}>
            {/* <App title="Buy/Sell Coin" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
