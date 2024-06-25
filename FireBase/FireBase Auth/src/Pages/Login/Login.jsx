import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      alert("Login successul");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <span
            style={{ color: "#ff5f15", cursor: "pointer" }}
            onClick={handleRegisterClick}
          >
            Register
          </span>
        </p>

        <span
          style={{ color: "Red", cursor: "pointer" }}
          onClick={handleForgotPasswordClick}
        >
          Forgot password?
        </span>

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

export default Login;
