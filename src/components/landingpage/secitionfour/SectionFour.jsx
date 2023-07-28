import React from "react";
import styles from "./sectionfour.module.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from './../../../assets/book.jpg'
import img2 from './../../../assets/fund.jpg'
import img3 from './../../../assets/buy.jpg'

const SectionFour = () => {
  return (
    <div className={`${styles.sectionfour_container} `}>
      <div className={styles.sectionfour_div}>
        <p>Get Started</p>
        <h3>Buy crypto in minutes</h3>
      </div>
      <Container className={`${styles.sectionfour_section} container `}>
        <Row>
          <Col sm={4} className={styles.sectionfour_col}>
            <img className={styles.col_img} src={img1} alt="" />
            <h4>Sign Up</h4>
            <p>
              Create your free account with a quick verification process. Its
              easy, we promise.
            </p>
          </Col>
          <Col sm={4} className={styles.sectionfour_col}>
            <img className={styles.col_img} src={img2} alt="" />
            <h4>Fund</h4>
            <p>
            Dip a toe or go all in. Connect a bank account securely — well never retain your bank info.
            </p>
          </Col>
          <Col sm={4} className={styles.sectionfour_col}>
            <img className={styles.col_img} src={img3} alt="" />
            <h4>Buy</h4>
            <p>
            If youre ready to buy, we make it easy. Just hit the button. Your future self will thank you.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionFour;
