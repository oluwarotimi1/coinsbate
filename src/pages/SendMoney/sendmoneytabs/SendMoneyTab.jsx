import React from 'react'
import InputMoney from '../inputMoney/InputMoney';
import Recipient from '../recipient/Recipient';
import RecipientDetails from '../recipientdetails/RecipientDetails';
import ReviewRecipient from '../reviewrecipient/ReviewRecipient';

const SendMoneyTab = ({activeTabSend, setActiveTabSend}) => {
    switch (activeTabSend) {
        case "input":
          return <InputMoney activeTabSend={activeTabSend}  setActiveTabSend={setActiveTabSend} />;
        case "recipient":
          return <Recipient activeTabSend={activeTabSend} setActiveTabSend={setActiveTabSend} />;
        case "recipientdetails":
          return <RecipientDetails activeTabSend={activeTabSend} setActiveTabSend={setActiveTabSend} />;
        case "review":
            return <ReviewRecipient activeTabSend={activeTabSend} setActiveTabSend={setActiveTabSend} />;
    
        default:
          return <InputMoney setActiveTabSend={setActiveTabSend} />;
      }
}

export default SendMoneyTab
