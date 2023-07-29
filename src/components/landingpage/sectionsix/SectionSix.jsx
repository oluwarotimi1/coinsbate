import React from "react";
import styles from "./sectionsix.module.css";
import { Col, Container, Row } from "react-bootstrap";
import {BsShieldCheck} from 'react-icons/bs'
import {GoClockFill} from 'react-icons/go'

const SectionSix = () => {
  return (
    <div className={styles.sectionsix_section}>
      <Container className={`${styles.sectionsix_container} container`}>
        <Row>
          <Col className={styles.sectionsix_coltwo}>
            <div className={styles.sectionsix_coltwo_div}></div>
          </Col>
          <Col className={`${styles.sectionsix_colone} `}>
            <p>Security</p>
            <h3>HODL with confidence</h3>
            <p>
              Our mobile app makes it easy to buy crypto and see whats happening
              with your portfolio while youre out and about.
            </p>
            <div>
              <div className={styles.sectionsix_hodl}>
                <span><BsShieldCheck size={50}/></span>
                <p>
                  We keep your deposits safe through offline storage, 24/7
                  transaction monitoring, and multi-factor encryption.
                </p>
              </div>
              <div className={styles.sectionsix_hodl}>
                <span><GoClockFill size={50}/></span>
                <p>
                Downtime is so 2022. With no transaction downtime, know your buy is always good as gold.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionSix;
