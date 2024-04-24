import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "./modal299max.module.css";
import { UserContext } from "../../../../../context/UserContext";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

function Modal299Max() {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const { isLoggedIn } = useContext(UserContext);
  const [inputInvest, setInputInvest] = useState("");
  const [depositError, setDepositError] = useState("")

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if ({ isLoggedIn }) {
      if(user?.depositBalance > 99 && user?.depositBalance < 4000 && inputInvest > 99 && inputInvest <4001){
        Swal.fire({
          title: "Congratulations",
          text: "Your investment was a success! Kindly check your dashboard in 24hours to keep tabs of your interest!",
          icon: "success"
        }).then((result) => {
          // Reload the page
          if (result.isConfirmed) {
            window.location.reload();
            window.scrollTo(0, 0); 
          }
        });
      } else return setDepositError("Insufficient balance (Minimum Investment is $100)")
      
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
          <Modal.Title>Confirm to invest on AMATEUR PLAN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className={styles.amateur_heading}>
                <p>invest: $100 - $999</p>
                <p>Interest: 1.14 %</p>
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
                  Input amount(Minimum $100)
                </p>
                
              )}
              <p role="alert" style={{ color: "red" }}>
                  {depositError}
                </p>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Another Plan
                </Button>
                <input variant="primary" type="submit" Value="Invest" className={styles.invest_btn2} />
              </Modal.Footer>
            </Form.Group>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modal299Max;
