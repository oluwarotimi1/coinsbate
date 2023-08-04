import React, { useState } from "react";
import styles from "./sell.module.css";

const Sell = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("Btc");
  const [inputQuantity, setInputQuantity] = useState(0)

  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
  };
  const handleQunatitySell =(event)=>{
    setInputQuantity(event.target.value)
  }
  return (
    <div>
      <h5 style={{ color:'var(--color-primary)'}}>Sell Cryptocurrency</h5>
      <label htmlFor="cryptoSelector" style={{margin: '0rem 1rem 0rem 0rem',fontSize:'1rem'}}>Select a cryptocurrency sell: </label>
      <select
        id="cryptoSelector"
        value={selectedCrypto}
        onChange={handleCryptoChange}
        className={styles.sell_select}
        style={{margin: '1rem 0rem'}}
      >
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
        <option value="usdt">USDT</option>
        <option value="bnb">BNB</option>
      </select>
      <label htmlFor="quantitySelector" style={{margin: '0rem 1rem 0rem 0rem',fontSize:'1rem'}}> Quantity to sell: </label>
      <input className={styles.sell_select} type="text" onChange={handleQunatitySell} value={inputQuantity}/>
      <p style={{margin: '1rem 0rem', fontSize:'1rem'}}>You selected: <span style={{ color:'var(--color-primary)'}}>{inputQuantity} {selectedCrypto.toUpperCase()}</span></p>
      <p style={{margin: '1rem 0rem', fontSize:'0.85rem'}}><span style={{ color:'red'}}>NB: Minimum Quantity to sell/buy is $50</span></p>
    </div>
  );
};

export default Sell;
