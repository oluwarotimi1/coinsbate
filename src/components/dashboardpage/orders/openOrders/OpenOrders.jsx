import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './openorders.module.css'

const OpenOrders = () => {
  return (
    <Container>
      <Row>
          <Col className={` ${styles.ordersection_col} pt-5`}>
            <h5 style={{ fontWeight: 200 }}>
              You don't have any Open orders.
            </h5>
          </Col>
        </Row>
    </Container>
  )
}

export default OpenOrders
