import React, { useContext } from "react";
import styles from "./portfolio.module.css";
import { UserContext } from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getBtc } from "./../../api/getApi";
import { Col, Container, Row } from "react-bootstrap";

const PortfoilioSection = () => {
  // function wait(duration) {
  //   return new Promise((resolve) => setTimeout(resolve, duration));
  // }
  const postsQuery = useQuery({
    queryKey: ["btc"],
    queryFn: getBtc,
    refetchInterval: 1000,
  });
  const { user } = useContext(UserContext);

  if (postsQuery.status === "loading")
    return <h5 className={styles.portfolio_container}>Loading...</h5>;
  if (postsQuery.status === "error")
    return <h5>{JSON.stringify(postsQuery.error)}</h5>;
  return (
    <div className={`${styles.portfolio_container} container mt-3`}>
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            Hello {user?.displayName}, This site is still currently under
            Maintenance
            <br />
            <p>Current Price of BTC:</p>
            {postsQuery.data && <h1>{postsQuery.data.USD.last}</h1>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfoilioSection;
