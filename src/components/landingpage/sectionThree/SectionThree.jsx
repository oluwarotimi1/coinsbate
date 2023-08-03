import React, { useEffect, useState } from "react";
import styles from "./sectionthree.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaBtc, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { LiaViacoin } from "react-icons/lia";
// import Axios from "axios";

const SectionThree = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setPrice(data.USD.last);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setLoading(false)
        });
    }, [2000]);
  }, []);
  return (
    <div className={`${styles.sectionthree_container} `}>
      <Container>
        <Row>
          <Col className={`${styles.sectionthree_colone} `}>
            <div className={styles.coin}>
              <span
                style={{
                  color: "white",
                  background: "rgb(235, 173, 18)",
                  borderRadius: "40%",
                }}
              >
                <FaBtc />
              </span>
              <div className={styles.coin_title}>
                <h3>Bitcoin</h3>
                <p>BTC</p>
              </div>
            </div>
            <div>
              <div>
                <h3>{loading? "...": "$" + price}</h3>
                <h4>+0.10%</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={`${styles.sectionthree_colone} `}>
            <div className={styles.coin}>
              <span
                style={{
                  color: "white",
                  background: "blue",
                  borderRadius: "40%",
                }}
              >
                <FaEthereum />
              </span>
              <div className={styles.coin_title}>
                <h3>Etheruem</h3>
                <p>ETH</p>
              </div>
            </div>
            <div>
              <div>
                <h3>$1,899.72</h3>
                <h4 style={{ color: "red" }}>-1.5%</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={`${styles.sectionthree_colone} `}>
            <div className={styles.coin}>
              <span
                style={{
                  color: "white",
                  background: "green",
                  borderRadius: "40%",
                }}
              >
                <SiTether />
              </span>
              <div className={styles.coin_title}>
                <h3>Tether</h3>
                <p>USDT</p>
              </div>
            </div>
            <div>
              <div>
                <h3>$0.99</h3>
                <h4>+0.01%</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={`${styles.sectionthree_colone} `}>
            <div className={styles.coin}>
              <span
                style={{
                  color: "white",
                  background: "pink",
                  borderRadius: "40%",
                }}
              >
                <LiaViacoin />
              </span>
              <div className={styles.coin_title}>
                <h3>LiaViacoin</h3>
                <p>LIA</p>
              </div>
            </div>
            <div>
              <div>
                <h3>$245.78</h3>
                <h4>+48%</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionThree;
