import React, { useState } from "react";
import styles from "./buy.module.css";

const Buy = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("Btc");

  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
  };
  return (
    <div>
      <h5>Buy Cryptocurrency</h5>
      <label htmlFor="cryptoSelector" style={{margin: '0rem 1rem 0rem 0rem',fontSize:'1rem'}}>Select a cryptocurrency buy: </label>
      <select
        id="cryptoSelector"
        value={selectedCrypto}
        onChange={handleCryptoChange}
        className={styles.buy_select}
        style={{margin: '1rem 0rem'}}
      >
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
        <option value="usdt">USDT</option>
        <option value="bnb">BNB</option>
      </select>
      <p style={{margin: '1rem 0rem', fontSize:'1rem'}}>You selected: <span style={{ color:'var(--color-primary)'}}>{selectedCrypto.toUpperCase()}</span></p>
    </div>
  );
};

export default Buy;
