import React from "react";
import styles from "./mybtn.module.css";

const MyBtn = ({ children, style, handleCLick, disabled }) => {
  return (
      <button
        className={styles.mybtn_styles}
        style={style}
        onClick={handleCLick}
        disabled={disabled}
      >
        {children}
      </button>
  );
};

export default MyBtn;
