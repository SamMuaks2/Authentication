import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle forgot password logic here
    console.log("Email:", email);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>

        <p>
          Go
          <span
            style={{ color: "#ff5f15", cursor: "pointer" }}
            onClick={handleHomeClick}
          >
            Home
          </span>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
