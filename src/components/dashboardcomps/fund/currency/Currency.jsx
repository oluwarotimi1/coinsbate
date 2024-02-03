import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import styles from "./currency.module.css";
import { Col, Row } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";
import { RiArrowLeftRightFill } from "react-icons/ri";


const Currency = () => {
  const Naira = () => {
    return (
      <span className={styles.currency_label}>
        <TbCurrencyNaira color="green" size="22" />
        <span>Naira</span>
      </span>
    );
  };
  const Dollar = () => {
    return (
      <span className={styles.currency_label}>
        <FaDollarSign color="orange" size="22" />
        <span> Dollar</span>
      </span>
    );
  };
  const Usdt = () => {
    return (
      <span className={styles.currency_label}>
        <FaDollarSign color="green" size="22" />
        <span> USDT</span>
      </span>
    );
  };
  return (
    <>
   
    <Tabs
      defaultActiveKey="naira"
      id="justify-tab-example"
      className="mb-3 pt-3"
      justify
    >
      <Tab eventKey="naira" title={Naira()}>
        <div>
          <Row>
            <Col className={styles.naira_available_table}>
              <div>
                <span className={styles.available_balance}>
                  Available Naira balance
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <TbCurrencyNaira />
                  <span>5,005,465.00</span>
                </h4>
              </div>
            </Col>
            <Col className={styles.naira_pending_table}>
              <div>
                <span className={styles.pending_balance_naira}>
                  Pending Naira balance
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <TbCurrencyNaira />
                  0.00
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </Tab>
      <Tab eventKey="dollar" title={Dollar()}>
        <div>
          <Row>
            <Col className={styles.naira_available_table}>
              <div>
                <span className={styles.available_balance}>
                  Available Dollar balance
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <FaDollarSign />
                  <span>765.00</span>
                </h4>
              </div>
            </Col>
            <Col className={styles.naira_pending_table}>
              <div>
                <span className={styles.pending_balance_naira}>
                  Pending balance
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <FaDollarSign />
                  5.00
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </Tab>
      <Tab eventKey="usdt" title={Usdt()}>
        <div>
          <Row>
            <Col className={styles.naira_available_table}>
              <div>
                <span className={styles.available_balance}>
                  Available Naira balance
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <FaDollarSign />
                  <span>565</span>
                </h4>
              </div>
            </Col>
            <Col className={styles.naira_pending_table}>
              <div>
                <span className={styles.pending_balance_naira}>
                  Pending Dollar balance
                </span>
              </div>
              <div>
                <h4 className={styles.currency_naira}>
                  <FaDollarSign />
                  0.00
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
                <Col>
                <btn className={styles.btn_convert}>Convert <RiArrowLeftRightFill size="16"/> </btn>
                </Col>
                <Col><btn className={styles.btn_convert}>Withdraw <MdArrowOutward size="16"/> </btn></Col>
            </Row>
        </div>
    </div>
    </>
  );
};

export default Currency;
