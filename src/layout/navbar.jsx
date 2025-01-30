import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="d-flex w-100 justify-content-center">
          <a className="navbar-brand text-center" href="#" style={{ fontSize: "1.5rem" }}>
            AU Bank
          </a>
        </div>
        <div>
          <Link className="btn btn-outline-light" to="/adduser" 
          style={{ width: "120px" }}>
            Add User
          </Link>
        </div>

      </div>
    </nav>
  );
}
