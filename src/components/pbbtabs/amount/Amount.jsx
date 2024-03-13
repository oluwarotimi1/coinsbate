import React from 'react'

const Amount = ({ setActiveTabBtc} ) => {
  const handleConfirmAmount = () => {
    setActiveTabBtc("confirmamount");
  };
  return (
    <div>
    Enter Amount here
      <button onClick={handleConfirmAmount}>Next</button>
    </div>
  )
}

export default Amount
