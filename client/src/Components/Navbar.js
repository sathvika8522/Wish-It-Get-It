import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "black"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            ta-bs-toggle="collapse"
            ta-bs-target="#navbarSupportedContent"
            a-controls="navbarSupportedContent"
            ia-expanded="false"
            ia-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="addFoodItem">
                  Add Food Item
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="wishList">
                  Wish List
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
