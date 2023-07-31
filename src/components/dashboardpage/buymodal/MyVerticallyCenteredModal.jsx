import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import styles from "./myverticallycenteredmodal.module.css";
import BuyModalTabs from "../buymodaltabs/BuyModalTabs";

function MyVerticallyCenteredModal(props) {
  const [activeTab, setActiveTab] = useState("buy");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
        <div className={styles.buy_sell_div}>
          <button onClick={() => setActiveTab("buy")} className={styles.modal_btn_buy}>Buy</button>
          <button onClick={() => setActiveTab("sell")} className={styles.modal_btn_sell}>Sell</button>
        </div>
      
      <Modal.Body>
        <h4>Centered Modal</h4>
        <BuyModalTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </Modal.Body>
      <Modal.Footer style={{textAlign:'center'}}>
        <Button onClick={props.onHide} >Proceed</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function App({ title }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setModalShow(true)}
        className={styles.create_proceed_btn}
      >
        {title}
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
