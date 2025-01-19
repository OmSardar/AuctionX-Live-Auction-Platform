import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BidHeader.css"; // Importing CSS file
import { MdAccountBalanceWallet } from "react-icons/md";

const Header = () => {
  const [amount, setAmount] = useState(0); // State to hold the available amount
  const [errorMessage, setErrorMessage] = useState(""); // State to handle error messages
  const email = localStorage.getItem("email"); // Get email from localStorage

  useEffect(() => {
    if (!email) {
      console.error("No email found in local storage");
      setErrorMessage("Please log in to view your balance.");
      return;
    }

    const fetchAmount = async () => {
      try {
        const response = await axios.get(
          `https://auction-x.onrender.com/api/auth/get-amount?email=${email}`
        );
        if (response.data && response.data.amount !== undefined) {
          setAmount(response.data.amount);
        } else {
          console.error("Amount not found in the response");
        }
      } catch (error) {
        console.error("Error fetching amount from the server:", error);
      }
    };

    fetchAmount();
  }, [email]);

  return (
    <div className="header">
      <h1 className="header__title">Account Overview</h1>
      <div className="header__balance-container">
        <span className="header__balance-label">
          <MdAccountBalanceWallet /> Balance:
        </span>
        <span className="header__balance">₹{amount}</span>
      </div>
    </div>
  );
};

export default Header;
