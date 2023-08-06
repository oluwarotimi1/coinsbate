import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import BuySection from "../../components/dashboardpage/buysection/BuySection";
import PortfoilioSection from "../../components/dashboardpage/portfoiliosection/PortfoilioSection";
import { useQuery } from "@tanstack/react-query";
import Orders from "../../components/dashboardpage/orders/Orders";
import Marquee from "react-fast-marquee";
import { getBtc } from "../../components/api/getApi";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  const postsQuery = useQuery({
    queryKey: ["btc"],
    queryFn: getBtc,
    refetchInterval: 1000,
  });

  const getPost = [{ id: 1 }];
  const loadDashboard = useQuery({
    queryKey: ["load"],
    queryFn: () => wait(0).then(() => [...getPost]),
  });
  if (loadDashboard.isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Getting Account Information...</p>
        <br />
        {/* <CircularProgress size={30} style={{ color: "var(--color-primary)" }} /> */}
      </div>
    );
  }
  if (loadDashboard.isError) {
    return <h1>Error getting dashboard information</h1>;
  }
  if (postsQuery.status === "loading")
    return <h5 className={styles.portfolio_container}>Loading...</h5>;
  if (postsQuery.status === "error")
    return <h5>{JSON.stringify(postsQuery.error)}</h5>;
  return (
    <div className={styles.dashboard_container}>
      <Marquee>
        <Container>
          <Row>
            <Col>
              <h6
                className={`${styles.marquee_container} container`}
                style={{ fontWeight: "100" }}
              >
                BTC:
                {postsQuery.data && (
                  <span style={{ color: "green" }}>
                    {" "}
                    ${postsQuery.data.USD.last}
                  </span>
                )}
              </h6>
            </Col>
            <Col>
              <h6
                className={`${styles.marquee_container} container`}
                style={{ fontWeight: "100" }}
              >
                ETH:
                {postsQuery.data && (
                  <span style={{ color: "green" }}>
                    {" "}
                    ${postsQuery.data.USD.last}
                  </span>
                )}
              </h6>
            </Col>
            <Col>
              <h6
                className={`${styles.marquee_container} container`}
                style={{ fontWeight: "100" }}
              >
                USDT:
                {postsQuery.data && (
                  <span style={{ color: "green" }}>
                    {" "}
                    {/* ${postsQuery.data.USD.last} */}
                    $882.5
                  </span>
                )}
              </h6>
            </Col>
            <Col>
              <h6
                className={`${styles.marquee_container} container`}
                style={{ fontWeight: "100" }}
              >
                Buy Rate:
                <span style={{ color: "green" }}>850/$</span>
              </h6>
            </Col>
            <Col>
              <h6
                className={`${styles.marquee_container} container`}
                style={{ fontWeight: "100" }}
              >
                Sell Rate:
                <span style={{ color: "green" }}>890/$</span>
              </h6>
            </Col>
          </Row>
        </Container>
      </Marquee>
      <div className={`${styles.dashboard_section}container`}>
        <BuySection />
        <Orders />
        <PortfoilioSection />
      </div>
    </div>
  );
};

export default Dashboard;
