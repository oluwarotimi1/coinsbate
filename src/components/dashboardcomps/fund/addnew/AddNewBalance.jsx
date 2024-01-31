import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./addnewbalance.module.css";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";

function AddNewBalance(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <btn onClick={handleShow} className={styles.mybtn_styles}>
        Add New Balance
      </btn>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Add New Balance</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select your choice of currency to add </p>
          <div className={styles.typeofcurrency}>
            <label className={styles.currency_label}>
                <input type="radio" name="currency" value="Naira" />
                <TbCurrencyNaira color="green" size="22"/>
                <span>Nigerian Naira</span>
            </label>
            <label className={styles.currency_label}>
                <input type="radio" name="currency" value="Dollar" />
                <FaDollarSign  color="orange" size="22"/>
                <span>US Dollar</span>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
            
            <button
              //   onClick={handleProceedClick}
              style={{ width: "100%", padding: "14px" }}
              className={styles.AddNewBalance_proceed}
            >
              Proceed
            </button>
            <button
              onClick={handleClose}
              style={{ width: "100%", marginTop: "2rem", padding: "14px" }}
              className={styles.AddNewBalance_proceed}
            >
              Cancel
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function AddNewBalanceButton() {
  const [modaleShow, setModaleShow] = React.useState(false);

  return (
    <>
      <AddNewBalance show={modaleShow} onHide={() => setModaleShow(false)} />
    </>
  );
}
