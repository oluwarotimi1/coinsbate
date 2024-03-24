import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./openorders.module.css";
import Table from "react-bootstrap/Table";

const OpenOrders = () => {
  return (
    <Container>
      <Row>
        <Col className={` ${styles.ordersection_col} pt-5`}>
          {/* <h5 style={{ fontWeight: 200 }}>
              You don't have any Open orders.
            </h5> */}
          <div>
            <Table striped bordered hover size="lg">
              <thead>
                <tr>
                  <th>#</th>
                  <th >Transaction ID</th>
                  <th>Amount Status</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OpenOrders;
