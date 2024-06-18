import React from "react";
import styles from "./investmentplan.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Modal299Max from "./modals/modal299max/Modal299Max";
import Modal4000Max from "./modals/modalmax4000/Modal4000Max";
import ThirdModal from "./modals/thirdModal/ThirdModal";
import FourthModal from "./modals/fourthmodal/FourthModal";
import FifthModal from "./modals/fifthmodal/FifthModal";
import SixthModal from "./modals/sixthmodal/SixthModal"
import SeventhModal from "./modals/seventhmodal/SeventhModal"
import EightModal from "./modals/eightmodal/EightModal";

const InvestmentPlan = () => {

  return (
    <section className={styles.plan_invest} id="invest">
      <Container className={styles.plan_invest_container}>
        <h4>Investment Plans</h4>
        <div>
          <Row>
            <Col>
              <Card className={styles.invest_card}>
                <h3>AMATEUR PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 1.14%</p>
                  <p>Every day</p>
                  <p>For 7 Day</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 9.8% +{" "}
                    <span
                      style={{
                        color: "white",
                        fontSize: "12px",
                        background: "green",
                        padding: "3px",
                      }}
                    >
                      Capital
                    </span>
                  </p>
                </div>
                <h5>$100 - $999</h5>
                <span >{ <Modal299Max />}</span>
              </Card>
            </Col>
            <Col>
              <Card className={styles.invest_card}>
                <h3>STARTER PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 1.17%</p>
                  <p>Every day</p>
                  <p>For 30 Days</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 35.1% +{" "}
                    <span
                      style={{
                        color: "white",
                        fontSize: "12px",
                        background: "green",
                        padding: "3px",
                      }}
                    >
                      Capital
                    </span>
                  </p>
                </div>
                <h5>$1000 - $4000</h5>
                <span >{ <Modal4000Max />}</span>
                  </Card>
            </Col>

            <Col>
              <Card className={styles.invest_card}>
                <h3>AU:1.0 GOLD PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 1.4%</p>
                  <p>Every day</p>
                  <p>For 30 Days</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 51.6% +{" "}
                    <span
                      style={{
                        color: "white",
                        fontSize: "12px",
                        background: "green",
                        padding: "3px",
                      }}
                    >
                      Capital
                    </span>
                  </p>
                </div>
                <h5>$4,000 - $10,000</h5>
                <span >{ <ThirdModal />}</span>
              </Card>
            </Col>
            <Col>
              <Card className={styles.invest_card}>
                <h3>ST:1.0 STOCK PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 2%</p>
                  <p>Every day</p>
                  <p>For 60 Days</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 120% +{" "}
                    <span
                      style={{
                        color: "white",
                        fontSize: "12px",
                        background: "green",
                        padding: "3px",
                      }}
                    >
                      Capital
                    </span>
                  </p>
                </div>
                <h5>$10,000 - $50,000</h5>
                <span >{ <FourthModal />}</span>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className={styles.invest_card}>
                <h3>AS:1.0 ASSETS PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 1.85%</p>
                  <p>Every day</p>
                  <p>For 60 Days</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 111% + <span style={{ color: "blue" }}>Capital</span>
                  </p>
                </div>
                <h5>$50,000 - $100,000</h5>
                <span >{ <FifthModal />}</span>
              </Card>
            </Col>
            <Col>
              <Card className={styles.invest_card}>
                <h3>AS2.0 ASSETS PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 2.2%</p>
                  <p>Every day</p>
                  <p>For 60 Days</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 132%% +{" "}
                    <span
                      style={{
                        color: "white",
                        fontSize: "12px",
                        background: "green",
                        padding: "3px",
                      }}
                    >
                      Capital
                    </span>
                  </p>
                </div>
                <h5>$100,000 - $1,000,000</h5>
                <span >{ <SixthModal />}</span>
              </Card>
            </Col>

            <Col>
              <Card className={styles.invest_card}>
                <h3>OIL AND GAS PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 2.4%</p>
                  <p>Every day</p>
                  <p>For 90 Days</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 216% + <span style={{ color: "blue" }}>Capital</span>
                  </p>
                </div>
                <h5>$200,000 - $1,000,000</h5>
                <span >{ <SeventhModal />}</span>
              </Card>
            </Col>
            <Col>
              <Card className={styles.invest_card}>
                <h3>REAL ESTATE/HOUSING PLAN</h3>
                <div className={styles.invest_card_div}>
                  <p>Return 2.6%</p>
                  <p>Every day</p>
                  <p>For 90 Days</p>
                  <p style={{ fontSize: "1rem" }}>
                    Total 234%% +{" "}
                    <span
                      style={{
                        color: "white",
                        fontSize: "12px",
                        background: "green",
                        padding: "3px",
                      }}
                    >
                      Capital
                    </span>
                  </p>
                </div>
                <h5>$500,000 - $2,000,000</h5>
                <span >{ <EightModal />}</span>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default InvestmentPlan;
