import React from "react";
import styles from "./sectionone.module.css";
import { Col, Container, Row } from "react-bootstrap";

const SectionOne = () => {
  return (
    <div className={`${styles.sectione_container}`}>
      <div className={`${styles.sectione_section} container`}>
        <Container>
          <Row>
            <Col>
              <div className={styles.sectionone_containerrow}>
                <h1 className={`${styles.sectionone_h1}`}>
                  A better way to bitcoin
                </h1>
                <p>
                  Join the fastest growing global cryptocurrency exchange — with
                  the lowest fees around.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SectionOne;
