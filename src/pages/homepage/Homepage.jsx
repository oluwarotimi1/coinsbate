import React from "react";
// import MyBtn from '../../components/buttons/MyBtn'
import styles from "./homepage.module.css";
import './homepage.css'
import SectionTwo from "../../components/landingpage/sectiontwo/SectionTwo";
import SectionOne from "../../components/landingpage/sectionone/SectionOne";

const Homepage = () => {
  // const primaryButtonStyle ={
  //     fontSize: '1rem'
  // }
  return (
    <div className={styles.homepage_container}>
      <div className={`${styles.homepage_section}`}>
        <SectionOne />
        <SectionTwo />
      </div>
      {/* <MyBtn style={primaryButtonStyle} children="primary"/> */}
    </div>
  );
};

export default Homepage;
