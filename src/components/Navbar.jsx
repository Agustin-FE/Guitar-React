import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item">
            <h1 className="is-size-3=is-size-3">GUITAR REACT</h1>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Gibson</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Les Paul</a>
                <a className="navbar-item">SG</a>
                <a className="navbar-item">ES</a>
                <a className="navbar-item">Designer</a>
                <hr className="navbar-divider"></hr>
                <a href="https://www.gibson.com/en-US/" className="navbar-item">
                  Gibson.com
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Fender</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Stratocaster</a>
                <a className="navbar-item">Telecaster</a>
                <a className="navbar-item">Jazzmaster</a>
                <hr className="navbar-divider"></hr>
                <a
                  href="https://www.fender.com/es/start"
                  className="navbar-item"
                >
                  Fender.com
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Taylor</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <hr className="navbar-divider"></hr>
                <a
                  href="https://www.taylorguitars.com/"
                  className="navbar-item"
                >
                  Taylor.com
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to={"/register"}>
                  <a className="button is-danger">Register</a>
                </Link>
                <br />
                <Link to={"/login"}>
                  <a className="button is-danger">Login</a>
                </Link>
                <Link to={"/cart"}>
                  <a className="button is-danger">
                    <strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
