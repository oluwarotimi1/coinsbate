import React from "react";
import styles from "./amount.module.css";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const Amount = ({ setActiveTabBtc }) => {
  const handleConfirmAmount = () => {
    setActiveTabBtc("confirmamount");
  };
  const schema = yup.object({
    // displayName: yup.string().required("Diasplay Name is required"),
    // email: yup.string().email().required("Enter Email Address"),
    // password: yup.string().required("Password field is empty"),
  });
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(watch("example")) // watch input value by passing the name of it

  const onSubmit = async (data) => {
    return console.log("hi");
  };
  return (
    <div>
      <Container className={styles.ammt_container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.ammt_form}>
          <div>Payment By Bitcoin</div>
          <h5>Enter Amount</h5>
          <div className={styles.div_ammt_input}>
            <input
            className={styles.ammt_input}
              type="number"
              placeholder="0.00"
              name="amount"
              {...register("amount", { required: true })}
              
            />
            <span>USD</span>
          </div>
        </form>
        <span className={styles.ammt_btns}>
        <button className={styles.ammt_btn} >Back</button>
        <button className={styles.ammt_btn} onClick={handleConfirmAmount}>Next</button>

        </span>
        
      </Container>
    </div>
  );
};

export default Amount;
