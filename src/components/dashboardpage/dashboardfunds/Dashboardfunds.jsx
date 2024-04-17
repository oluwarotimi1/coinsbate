import React, { useContext, useEffect } from "react";
import styles from "./dashbaordfunds.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { CgDollar } from "react-icons/cg";
import { UserContext } from "../../context/UserContext";
import { db } from "../../../auth/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Dashboardfunds = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // Function to update interest balance
    const updateInterestBalance = () => {
      if (user?.depositBalance > 300 && user?.depositBalance < 4000) {
        const dailyInterestRate = 0.0117; // 1.17% daily interest rate
        const newInterestBalance =
          user?.interestBalance * (1 + dailyInterestRate);
        setUser((prevUser) => ({
          ...prevUser,
          interestBalance: newInterestBalance,
        }));

        const userRef = doc(db, "users", user.uid);
         updateDoc (userRef, {
            interestBalance: newInterestBalance,
          })
          .then(() => {
            console.log("Interest balance updated successfully");
          })
          .catch((error) => {
            console.error("Error updating interest balance:", error);
          });
      }
    };

    // Run the function every day (24 hours)
    // const intervalId = setInterval(updateInterestBalance, 24 * 60 * 60 * 1000);

     // Run the function every 24 hours
     const intervalId = setInterval(updateInterestBalance, 24 * 60 * 60 * 1000);

    // Clean up function to clear interval
    return () => clearInterval(intervalId);
  }, [user, setUser]);

  return (
    <div className={`${styles.dashboardfunds_container} container mt-3`}>
      <Container>
        <Row>
          <Col>
            <Card className={styles.dashboardfunds_card}>
              <div className={styles.dashboardfunds_card_wallet_balance}>
                <div>
                  <p>Deposit Wallet Balance</p>
                  <h6 className="">${user?.depositBalance}</h6>
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
                <div>
                  <p>Interest Wallet Balance</p>
                  <h6 className="">${user?.interestBalance}</h6>
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
                <div>
                  <p>Total Invest</p>
                  <h6 className="">${user?.totalInvest}</h6>
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
                <div>
                  <p>Total Deposit</p>
                  <h6 className="">${user?.totalDeposit}</h6>
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
              <div>
                <p>Total Withdraw</p>
                <h6 className="">${user?.totalWithdraw}</h6>
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
              <div>
                <p>Referral Earnings</p>
                <p className="">Coming soon</p>
              </div>
              <div>
                <CgDollar size={26} />
              </div>
            </div>
          </Card>
        </Col>
        <Row />
      </Container>
    </div>
  );
};

export default Dashboardfunds;
