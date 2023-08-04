import React, { useContext, useEffect, useState} from 'react'
import styles from "./profile.module.css"
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from 'react-bootstrap';
import { UserContext } from '../../components/context/UserContext';
import { Link } from 'react-router-dom';
import {MdVerified} from 'react-icons/md'


const Profile = () => {
    const {user} = useContext(UserContext);
    const {verifiedUser} = useContext(UserContext);
    const [verifiedStatus, setVerificationStatus] = useState("Not Verified")

    useEffect(()=>{
        if(verifiedUser){
            setVerificationStatus("Verified")
        }
    },[verifiedUser])

  return (
    <div className={`${styles.profile_container} container`}>
      <div className={`${styles.profile_section}container`}> 
      <ListGroup as="ul" className={styles.listgroup} >
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
          {!verifiedUser? <Link to="/profile">Verify Account</Link> : <MdVerified size={19}/>}
          
        </div>
        <Badge bg="primary" pill>
          {verifiedStatus}
        </Badge>
      </ListGroup.Item>
      </ListGroup>
      
      </div>
    </div>
  )
}

export default Profile
