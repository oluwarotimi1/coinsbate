import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "./fourthmodal.module.css";
import { UserContext } from "../../../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function FourthModal() {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate("");
  const [inputInvest, setInputInvest] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if ({ isLoggedIn }) {
      navigate("/dashboard");
    } else return setShow(true);
    console.log(data);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleAmountInvest = (event) => {
      setInputInvest(event.target.value);
    
  };

  return (
    <div>
      <button className={styles.invest_btn1} onClick={handleShow}>
        Invest Now
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm to invest on ST:1.0 STOCK PLAN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className={styles.amateur_heading}>
                <p>invest: $10,000 - $50,000</p>
                <p>Interest: 2%</p>
                <p>per 24 hours , 7 timess</p>
              </div>
              <Form.Label className={styles.select_wallet}>
                Select Wallet
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Deposit Wallet -$ {user?.depositBalance}</option>
                <option value="1">
                  Interest Wallet -$ {user?.interestBalance}
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Invest Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount to invest"
                autoFocus
                {...register("amount", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.mail ? "true" : "false"}
                name="amount"
                value={inputInvest}
                onChange={handleAmountInvest}
              />
              <br />
              {errors.amount?.type === "required" && (
                <p role="alert" style={{ color: "red" }}>
                  Input amount(Minimum $4000)
                </p>
              )}
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Another Plan
                </Button>
                <input variant="primary" type="submit" />
              </Modal.Footer>
            </Form.Group>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FourthModal;
