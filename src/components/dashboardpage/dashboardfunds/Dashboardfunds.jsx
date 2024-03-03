import React from "react";
import styles from "./dashbaordfunds.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { CgDollar } from "react-icons/cg";

const Dashboardfunds = () => {
  return (
    <div className={`${styles.dashboardfunds_container} container mt-3`}>
      <Container>
        <Row>
          <Col>
            <Card className={styles.dashboardfunds_card}>
              <div className={styles.dashboardfunds_card_wallet_balance}>
                <div >
                  <p>Deposit Wallet Balance</p>
                  <h6 className="">$0</h6>
                </div>
                <div>
                  <CgDollar size={26} />
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className={styles.dashboardfunds_card}>
              <div className={styles.dashboardfunds_card_wallet_balance}>
                <div >
                  <p>Interest Wallet Balance</p>
                  <h6 className="">$0</h6>
                </div>
                <div>
                  <CgDollar size={26} />
                </div>
              </div>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col>
            <Card className={styles.dashboardfunds_card}>
              <div className={styles.dashboardfunds_card_wallet_balance}>
                <div >
                  <p>Total Invest</p>
                  <h6 className="">$0</h6>
                </div>
                <div>
                  <CgDollar size={26} />
                </div>
              </div>
            </Card>
          </Col>
        
        
          <Col>
            <Card className={styles.dashboardfunds_card}>
              <div className={styles.dashboardfunds_card_wallet_balance}>
                <div >
                  <p>Total Deposit</p>
                  <h6 className="">$0</h6>
                </div>
                <div>
                  <CgDollar size={26} />
                </div>
              </div>
            </Card>
          </Col>
          </Row>
          <Col>
            <Card className={styles.dashboardfunds_card}>
              <div className={styles.dashboardfunds_card_wallet_balance}>
                <div >
                  <p>Total Withdraw</p>
                  <h6 className="">$0</h6>
                </div>
                <div>
                  <CgDollar size={26} />
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className={styles.dashboardfunds_card}>
              <div className={styles.dashboardfunds_card_wallet_balance}>
                <div >
                  <p>Referral Earnings</p>
                  <p className="">Coming soon</p>
                </div>
                <div>
                  <CgDollar size={26} />
                </div>
              </div>
            </Card>
          </Col>
        <Row/>
      </Container>
    </div>
  );
};

export default Dashboardfunds;
