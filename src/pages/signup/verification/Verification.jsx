import React from 'react'

const Verification = ({ setActiveTab}) => {
    const handleBack =()=>{
        setActiveTab("signupform")
    }
  return (
    <div>
        <button onClick={handleBack}>Back</button> <br/>
      Hello Verification
    </div>
  )
}

export default Verification
