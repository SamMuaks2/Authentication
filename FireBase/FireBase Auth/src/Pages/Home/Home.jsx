import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Homepage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to the Homepage</h1>
      <p>This is the homepage of the application.</p>

      <div className="button">
        <button className="r-button" onClick={handleRegisterClick}>
          Register
        </button>
        <button className="l-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Homepage;
