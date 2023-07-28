import React from "react";
import styles from "./sectionfive.module.css";
import { Col, Container, Row } from "react-bootstrap";

const SectionFive = () => {
  return (
    <div className={`${styles.sectionfive_container} `}>
      <Container className={`${styles.sectionfive_container} `} >
        <Row >
          <Col className={`${styles.sectionfive_colone}`}>
            <p>Mobile</p>
            <h4>Take the market to go</h4>
            <p>
              Our mobile app makes it easy to buy crypto and see whats happening
              with your portfolio while youre out and about.
            </p>
            <div className={`${styles.sectionfive_btn_div} `}> 
                <button>Get on Google play Store</button>
            </div>
          </Col>
          <Col className={styles.sectionfive_coltwo}>
          <div className={styles.sectionfive_coltwo_div}>

          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionFive;
