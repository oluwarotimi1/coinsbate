import React from "react";
import styles from "./portfolio.module.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionThree from "../../landingpage/sectionThree/SectionThree";

const PortfoilioSection = () => {
  return (
    <React.Fragment>
      <div className={`${styles.portfolio_container} ${styles.sectionthree_container} container mt-3`}>
        <Container>
          <Row>
            <Col>
            <SectionThree />
            </Col>
          </Row>
        </Container>
      </div>

      <div className={`${styles.portfolio_container} container mt-3 mb-3`}>
        <Container>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col className={styles.activity}>
              <h5>Recent Activites And Annoucements</h5>
              <div>You don't have any activities in the past month.</div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PortfoilioSection;
