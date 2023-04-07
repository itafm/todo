import React from "react";
import logo from "../image/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container-fluid">
          <img
            className="logo shadow-sm w-40 animate__animated animate__zoomIn animate__slower"
            src={logo}
            alt=""
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
            <div className="navbar-nav liste m-auto">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>

              <NavLink className="nav-link" to="/pro-jects">
                Projects
              </NavLink>
              <NavLink className="nav-link" to="/con-tacts">
                Contact{" "}
              </NavLink>
            </div>
            <div className="form-check  form-switch">
              <input
                className="form-check-input bg-danger"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked={darkMode}
                onChange={toggleMode}
              />

              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                {darkMode ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
