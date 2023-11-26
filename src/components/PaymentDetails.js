import React, { useState } from "react";
import "./PaymentDetails.css";

const PaymentDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(true); // Assuming the checkbox is initially checked

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handleSubscribe = () => {
    // Implement your subscribe logic here
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div className="paymentPage">
      <div className="paymentDetails">
        <h2>Payment Details</h2>
      </div>
      <div className="emailFamily">
        <div className="emailText">
          <h3>Card Number</h3>
        </div>
        <div className="emailBox">
          <input type="email"></input>
        </div>
      </div>
      <div className="passwordFamily">
        <div className="passwordText">
          <h3>CVV</h3>
        </div>
        <div className="passwordBox">
          <input type="password"></input>
        </div>
      </div>
      <input type="submit" value="Submit"></input>
    </div>
  );
};

export default PaymentDetails;
