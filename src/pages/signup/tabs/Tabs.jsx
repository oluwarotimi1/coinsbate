import React from 'react'
import Create from '../create/Create';
import SignUpForm from '../signupform/SignUpForm';

const Tabs = ({activeTab}) => {
    switch (activeTab) {
        case "create":
          return <Create />;
          case "signupform":
          return <SignUpForm />;
       
        default:
          return <Create />
       }
}

export default Tabs
