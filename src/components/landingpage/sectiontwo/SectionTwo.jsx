import React from "react";
import styles from "./sectiontwo.module.css";
import { Col, Container, Row } from "react-bootstrap";
import BasicCard from "../../card/BasicCard";

const SectionTwo = () => {
  
  return (
    <div className={`${styles.sectiontwo_container} `}>
      <div>
      </div>
      <Container fluid>
        <Row >
          <Col className={`${styles.SectionTwo_colone} container`}>
            <p>Product</p>
            <h3>Your portfolio at your fingertips</h3>
            <h5>
              Get verified, get funded, buy and sell and also track your assets across all of your
              screens. Whether this is your first or five millionth investment,
              we've got tools built just for you.
            </h5 >
              <BasicCard  parent="New Investors" children="We make it easy to learn about and buy your first crypto assets."/>
              <BasicCard parent="Pro Traders" children="You'll get all of the tools you need for more frequent and complex trades."/>
            
          </Col>
          <Col className={styles.SectionTwo_coltwo}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionTwo;
