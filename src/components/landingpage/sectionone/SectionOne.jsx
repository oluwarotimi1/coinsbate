import React, { useEffect, useState } from "react";
import styles from "./sectionone.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBtc } from "react-icons/fa";
import MyBtn from "../../buttons/MyBtn";
import { useNavigate } from "react-router-dom";

const SectionOne = () => {
  const navigate = useNavigate("");
  const [price, setPrice] = useState("...");
  const [percentage, setPercentage] = useState("");
  const [loading, setLoading] = useState(true);
  const [previousPrice, setPreviousPrice] = useState(null);

  const BuyButtonStyle = {
    background: "linear-gradient(96.17deg, #aa85fa -2.71%, #ff4a9b 108.06%)",
  };
  const BuyButtonStyleTwo = {
    // background: "var(--color-white)",
    background: "linear-gradient(96.17deg, #aa85fa -2.71%, #ff4a9b 108.06%)",
    color: "var(--color-white)",
    border: "none",
    width: "250px",
    fontSize: "1.2rem",
  };
  const handleTradeNow = () => {
    navigate("/dashboard");
  };
  // linear-gradient(96.17deg,#aa85fa -2.71%,#ff4a9b 108.06%),#080013

  useEffect(() => {
    setInterval(() => {
      fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setPrice(data.USD.last);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, [2000]);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (previousPrice !== null && price > previousPrice) {
        setPercentage("Green");
      } else setPercentage("Red");
    }, 2000);

    return () => {
      setPreviousPrice(price);
      clearInterval(interval);
    };
  }, [price, previousPrice]);
  return (
    <div className={`${styles.sectione_container}`}>
      <div className={`${styles.sectione_section} container`}>
        <Container>
          <Row>
            <Col>
              <div className={styles.sectionone_containerrow}>
                <h1 className={`${styles.sectionone_h1} pt-5`}>
                  <motion.div
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.3, duration: 3 }}
                  >
                    Start your crypto investment today.
                  </motion.div>
                </h1>

                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.3, duration: 3 }}
                >
                  <p>
                    Join the fastest growing global cryptocurrency investment company —
                   
                  </p>
                </motion.div>

                <div className={`${styles.btc_div} mt-3`}>
                  <span className={styles.btc_symbol}>
                    <FaBtc />
                  </span>
                  <span className={styles.btc_title}>Bitcoin </span>
                  <span className={styles.btc}>BTC</span>
                  {/* <span className={styles.btc_pnl}> {percentage}</span> */}
                  <span
                    className={styles.btc_value}
                    style={{ color: percentage === "Green" ? "green" : "red" }}
                  >
                    {" "}
                    {loading ? "..." : "$" + price}
                  </span>
                  <MyBtn
                    style={BuyButtonStyle}
                    handleCLick={handleTradeNow}
                    children="Invest Now"
                  />
                </div>
                <div className={styles.btn_two}>
                  <MyBtn
                    style={BuyButtonStyleTwo}
                    handleCLick={handleTradeNow}
                    onMouseEnter={() => {
                      // Change the background color when the button is hovered over
                      BuyButtonStyleTwo.background = "blue";
                    }}
                    onMouseLeave={() => {
                      // Reset the background color when the hover is no longer active
                      BuyButtonStyleTwo.background = "red";
                    }}
                    children="Invest Now"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SectionOne;
