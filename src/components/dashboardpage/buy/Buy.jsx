import React, { useState } from "react";
import styles from "./buy.module.css";
import MyBtn from "../../buttons/MyBtn";
import { CircularProgress } from "@mui/material";
import { isDisabled } from "@testing-library/user-event/dist/utils";
// import BuyConfirmModal from "../buyconfirmmodal/BuyConfirmModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Buy = () => {
  const [loading, setIsLoading] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState("Btc");
  const [inputQuantity, setInputQuantity] = useState(0);
  const [inputWallet, setInputWallet] = useState("");
  const [inputCredit, setInputCredit] = useState("");

  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
  };
  const handleQunatitySell = (event) => {
    setInputQuantity(event.target.value);
  };
  const handleCredit=(event) =>{
    setInputCredit(event.target.value);
    // setInputCredit(event.inputQuantity*890)
  }
  const handleWallet = (event) =>{
    setInputWallet(event.target.value)
  }
  const schema = yup.object({
    inputQuantity: yup.string().required("Fill up this field"),
    password: yup.string().required("Password feild is empty"),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true)
    console.log(data)
    setIsLoading(false)
  }

  return (
    <div>
      <h5 style={{ color: "var(--color-primary)" }}>Buy Cryptocurrency</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.div_input}>
          <label
            htmlFor="cryptoSelector"
            style={{ margin: "0rem 1rem 0rem 0rem", fontSize: "1rem" }}
          >
            Select a cryptocurrency buy:{" "}
          </label>
          <select
            id="cryptoSelector"
            value={selectedCrypto}
            onChange={handleCryptoChange}
            className={styles.sell_select}
            style={{ margin: "1rem 0rem" }}
          >
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="usdt">USDT</option>
            <option value="bnb">BNB</option>
          </select>
        </div>

        <div className={styles.div_input}>
          <label
            htmlFor="quantitySelector"
            style={{ margin: "0rem 1rem 0rem 0rem", fontSize: "1rem" }}
          >
            {" "}
            Quantity to buy:{" "}
          </label>
          <input
            className={styles.sell_select}
            type="text"
            onChange={handleQunatitySell}
            value={inputQuantity}
          />
          <p style={{ margin: "0.3rem 0", fontSize: "0.87rem" }}>
              <span style={{ color: "red" }}>{errors?.inputQuantity?.message}</span>
            </p>  </div>

        <div className={styles.div_input}>
          <p style={{ margin: "1rem 0rem", fontSize: "1rem" }}>
            You selected:{" "}
            <span style={{ color: "var(--color-primary)" }}>
              {inputQuantity} {selectedCrypto.toUpperCase()}
            </span>
          </p>
          <p style={{ margin: "1rem 0rem", fontSize: "0.85rem" }}>
            <span style={{ color: "red" }}>
              NB: Minimum Quantity to sell/buy is $50(N44,000)
            </span>
          </p>
        </div>

        <div className={`${styles.div_input} mb-3`}>
          <label
            htmlFor="quantitySelector"
            style={{ margin: "0rem 1rem 0rem 0rem", fontSize: "1rem" }}
          >
            {" "}
            Amount Buying in Naira(900/$):{" "}
          </label>
          <input
            className={styles.sell_select}
            type="number"
            onChange={handleCredit}
            value={inputCredit}
          />
        </div>

        <div className={styles.div_input}>
          <label
            htmlFor="quantitySelector"
            style={{ margin: "0rem 1rem 0rem 0rem", fontSize: "1rem" }}
          >
            {" "}
            My Wallet Address:
          </label>
          <input
            className={styles.sell_select}
            type="text"
            onChange={handleWallet}
            value={inputWallet}
            placeholder="Wallet Address"
          />
        </div>
        
        {loading ? (
          <MyBtn
            children={
              <CircularProgress
                size={25}
                style={{
                  color: "var(--color-primary)",
                  textAlign: "center",
                }}
              />
            }
            style={{
              width: "100%",
              marginTop: "2rem",
              padding: "14px",
              cursor: "not-allowed",
            }}
            type="Begin Transaction"
            disabled={isDisabled}
          />
        ) : (
          <MyBtn
            children="Begin Transaction"
            style={{ width: "100%", marginTop: "2rem", padding: "14px" }}
            type="submit"
          />
        )}
      </form>
    </div>
  );
};

export default Buy;
