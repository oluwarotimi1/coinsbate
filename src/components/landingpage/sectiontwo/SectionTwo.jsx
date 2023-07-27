import React from "react";
import styles from "./sectiontwo.module.css";
import { Col, Container, Row } from "react-bootstrap";
import BasicCard from "../../card/BasicCard";

const SectionTwo = () => {
  return (
    <div className={`${styles.sectiontwo_container} `}>
      <Container fluid>
        <Row>
          <Col className={styles.SectionTwo_colone}>
            <p>Product</p>
            <h3>Your portfolio at your fingertips</h3>
            <h5>
              Get verified, get funded, and track your assets across all of your
              screens. Whether this is your first or five millionth investment,
              weve got tools built just for you.
            </h5>
              <BasicCard />
            
          </Col>
          <Col className={styles.SectionTwo_coltwo}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionTwo;
