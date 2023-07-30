import React from "react";
import Create from "../create/Create";
import SignUpForm from "../signupform/SignUpForm";
import Verification from "../verification/Verification";

const Tabs = ({ activeTab, setActiveTab }) => {
  switch (activeTab) {
    case "create":
      return <Create activetab={activeTab} setActiveTab={setActiveTab} />;
    case "signupform":
      return <SignUpForm activetab={activeTab} setActiveTab={setActiveTab} />;
    case "verification":
      return <Verification activetab={activeTab} setActiveTab={setActiveTab} />;

    default:
      return <Create />;
  }
};

export default Tabs;
