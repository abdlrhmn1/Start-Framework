import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100 py-4 second-color">
        <div className="container text-light">
          <Link className="nav-link">
            <h1>START FRAMEWORK</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light bg- border-1"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link
                  className="nav-link fw-bold active text-white"
                  aria-current="page"
                  to={"about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link fw-bold text-white" to={"portfolio"}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link fw-bold text-white" to={"contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
