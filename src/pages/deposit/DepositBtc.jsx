import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./depositbtc.module.css";
import btcImage from "../../assets/btc_image.png";
import usdtImage from "../../assets/usdt_image.png";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const DepositBtc = ({inputData}) => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/dashboard")
      };
      const hanldleBtc =()=>{
        navigate("/deposit-btc")
      }
  return (
    <section className={styles.DepositBtc_section}>
      <Container className={styles.DepositBtc_container}>
        <span className={styles.create_back} onClick={handleBack}>
          <TbArrowBackUp size={22} /> Back
          <span></span>
        </span>
        <Row>
          <Col>
            <div className={styles.btc_card}>
              <img src={btcImage} alt="" width="100px" height="100px" />
              <form className={styles.btc_form}>
                <p>Bitcoin</p>
                <p>Limit : 50- 100,000,000 USD </p>
                <p>Charge - 0 USD + 0%</p>
                <button onClick={hanldleBtc}>Deposit</button>
              </form>
            </div>
          </Col>
          <Col>
            <form className={styles.btc_card}>
              <img src={usdtImage} alt="" width="100px" height="100px" />
              <form className={styles.btc_form}>
                <p>USDT</p>
                <p>Limit : 50- 100,000,000 USD </p>
                <p>Charge - 0 USD + 0%</p>
                <button>Deposit</button>
              </form>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DepositBtc;
