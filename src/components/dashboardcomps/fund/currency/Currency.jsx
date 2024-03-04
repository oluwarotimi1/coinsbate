import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaDollarSign } from "react-icons/fa";
import styles from "./currency.module.css";
import { Col, Row } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";


const Currency = ({setActiveDashboard}) => {

  const {user} = useContext(UserContext);

  const handleWithdrawFunds =()=>{
    setActiveDashboard("withdraw");
  }
  const TotalDeposit = () => {
    return (
      <span className={styles.currency_label}>
        <span> Total Deposit</span>
      </span>
    );
  };
  const PendingDeposit = () => {
    return (
      <span className={styles.currency_label}>
        <span> Pending Deposit Balance</span>
      </span>
    );
  };
  return (
    <>
   
    <Tabs
      defaultActiveKey="dollar"
      id="justify-tab-example"
      className="mb-3 pt-3"
      justify
    >
      <Tab eventKey="dollar" title={TotalDeposit()}>
        <div>
          <Row>
            <Col className={styles.naira_available_table}>
              <div>
                <span className={styles.available_balance}>
                  Total Deposit
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <FaDollarSign />
                  <span>{user?.depositBalance}</span>
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </Tab>
      <Tab eventKey="usdt" title={PendingDeposit()}>
        <div>
          <Row>
            
            <Col className={styles.naira_pending_table}>
              <div>
                <span className={styles.pending_balance_naira}>
                  Pending Deposit Balance
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <FaDollarSign />
                  {user?.pendingBalance}
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </Tab>
    </Tabs>
    <div>
        <div>
            <Row className={styles.convert_withdraw}>
                <Col><btn className={styles.btn_convert} onClick={handleWithdrawFunds}>Withdraw Balance <MdArrowOutward size="16"/> </btn></Col>
            </Row>
        </div>
    </div>
    </>
  );
};

export default Currency;
