import React from "react";
import styles from './mybtn.module.css'

const MyBtn = ({children, style}) => {

  return (
    <button
      className={styles.mybtn_styles}
      style={style}
    >
      {children}
    </button>
  );
};

export default MyBtn;
