import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleChange=(e)=>{
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }
   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register);

    try{
      const response= await axios.post("http://localhost:8080/addUser", register)
      console.log(response.data);
      alert("registered Successfully")
      navigate("/login"); 
    }catch(error){
      console.log(error);
    }
  };

  const registerData={
    name:"",
    email:"",
    password:""
  }
  const [register, setRegister]= React.useState(registerData);

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Sign Up</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your username"
            value={register.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={register.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={register.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <div className="signup-prompt">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
