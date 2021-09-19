import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Menu from "../../assets/images/menu.svg";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="menu">
            <img src={Menu} alt="Menu icon" />
          </div>
          <Link className="navbar-brand" to="/">
            GoBetween
          </Link>
        </div>
        <Link className="login" to="/login">
            Login
          </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item register">
              <Link className="nav-link" to="/register">
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
