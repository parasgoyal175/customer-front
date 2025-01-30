import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import axios from "axios";

export default function Login() {
  const [userId, setUserIdValue] = useState("");
  const [password, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", userId, "Password:", password);

    const data = {
      userId,
      password,
    };

    try {
      const response = await axios.post("http://localhost:8080/loginUser", data);

      if (!response.data) {
        alert("Invalid Credentials");
      } else {
        alert("Login Successful");
        navigate("/home"); 
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={userId}
            onChange={(e) => setUserIdValue(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="signup-prompt">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
