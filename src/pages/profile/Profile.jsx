import React, { useContext, useEffect, useState } from "react";
import styles from "./profile.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";
import { UserContext } from "../../components/context/UserContext";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const Profile = () => {
  const { user } = useContext(UserContext);
  const { verifiedUser } = useContext(UserContext);
  const [verifiedStatus, setVerificationStatus] = useState("Not Verified");
  const [completeKyc, setCompleteKyc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (verifiedUser) {
      setVerificationStatus("Verified");
      setCompleteKyc("");
    } else {
      setCompleteKyc(
        "N:B Your Kyc verification has to be verified before you can buy cryptocurrencies. Fill kyc form before proceeding to buy cryptocurrencis on this website"
      );
    }
  }, [verifiedUser]);

  return (
    <div className={`${styles.profile_container} container`}>
      <div className={`${styles.profile_section}container`}>
        <Link to="/profile" style={{ color: "red", textDecoration: "none" }}>
          <p>{completeKyc}</p>
        </Link>
        <h5>Profile</h5>
        <ListGroup as="ul" className={styles.listgroup}>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Email</div>
              <Link to="/profile">Update Email</Link>
            </div>
            <Badge bg="primary" pill>
              {user?.email}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Display Name</div>
              <Link to="/profile">Update Display Name</Link>
            </div>
            <Badge bg="primary" pill>
              {user?.displayName}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Phone Number</div>
              <Link to="/profile">Update Phone Number</Link>
            </div>
            <Badge bg="primary" pill>
              {user?.phoneNumber}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">KYC Verification Status</div>
              {!verifiedUser ? (
                <Link to="/profile">Verify Account</Link>
              ) : (
                <MdVerified size={19} />
              )}
            </div>
            <Badge bg="primary" pill>
              {verifiedStatus}
            </Badge>
          </ListGroup.Item>
        </ListGroup> 
        <br />
        <h5>Previous Transaction</h5>
        <ListGroup as="ul" className={styles.listgroup}>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <h5 className="fw-bold">No Previous Transaction yet</h5>
              <Link to="/dashboard"><h5>Trade Now</h5></Link>
            </div>
            {/* <Badge bg="primary" pill>
              {user?.email}
            </Badge> */}
          </ListGroup.Item>
          </ListGroup>
      </div>
    </div>
  );
};

export default Profile;
