import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../essets/search.svg";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const Navbar = () => {
  const [isSerching, setIsSerching] = useState(false);
  useEffect(() => {}, [isSerching]);

  return (
    <>
      <nav className="navbar is-black is-fixed-top is-hoverable">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <strong className="has-text-white is-size-5">GUITAR REACT</strong>
            </Link>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link"><strong>Gibson</strong>®-Guitars</a>
              <div className="navbar-dropdown">

                {/* <Link to={"/gibson/electric"}>
                  <a className="navbar-item">Electric</a>
                </Link> */}

                <div className="nested dropdown">
                    <a className="navbar-item">
                      <span className="icon-text">
                        <span>Electrics</span>
                        <span className="icon">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a className="dropdown-item">Les Paul</a>
                        <a className="dropdown-item">SG</a>
                        <a className="dropdown-item">ES</a>
                      </div>
                    </div>
                  </div>
                  <div className="nested dropdown">
                    <a className="navbar-item">
                      <span className="icon-text ">
                        <span>Acoustics</span>
                        <span className="icon">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a className="dropdown-item">Original Collection</a>
                        <a className="dropdown-item">Artist Collection</a>
                      </div>
                    </div>
                  </div>
                <hr className="navbar-divider"></hr>
                <a href="https://www.gibson.com/en-US/" className="navbar-item">Gibson.com</a>
              </div>
            </div>

         
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link"><strong>Fender</strong>®-Guitars</a>
              <div className="navbar-dropdown">
              <div className="nested dropdown">
                    <a className="navbar-item">
                      <span className="icon-text ">
                        <span>Electrics</span>
                        <span className="icon">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a className="dropdown-item">Stratocaster</a>
                        <a className="dropdown-item">Telecaster</a>
                        <a className="dropdown-item">JazzMaster</a>
                      </div>
                    </div>
                  </div>
                  <div className="nested dropdown">
                    <a className="navbar-item">
                      <span className="icon-text ">
                        <span>Acoustics</span>
                        <span className="icon">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a className="dropdown-item">Paramount</a>
                        <a className="dropdown-item">Classic Design</a>
                      </div>
                    </div>
                  </div>
                <hr className="navbar-divider"></hr>
                <a
                  href="https://www.fender.com/es/start"
                  className="navbar-item">Fender.com
                </a>
              </div>
            </div>
           
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link"><strong>Taylor</strong>®-Guitars</a>
              <div className="navbar-dropdown">
              <div class="nested dropdown">
                    <a className="navbar-item">
                      <span className="icon-text ">
                        <span>Electrics</span>
                        <span className="icon">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a className="dropdown-item">T3</a>
                      </div>
                    </div>
                  </div>
                  <div className="nested dropdown">
                    <a className="navbar-item">
                      <span className ="icon-text ">
                        <span>Acoustics</span>
                        <span className="icon">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a className="dropdown-item">The Taylor Line</a>
                        <a className="dropdown-item">American Dream®</a>
                      </div>
                    </div>
                  </div>
                <hr className="navbar-divider"></hr>
                <a href="https://www.taylorguitars.com/" className="navbar-item">Taylor.com</a>
              </div>
            </div>
    
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-danger">
                  <Link to={"/register"}>
                    <p className="has-text-white">Register</p>
                  </Link>
                </button>
                <br />
                <br />
                <br />
                <button className="button is-danger">
                  <Link to={"/login"}>
                    <p className="has-text-white">Login</p>
                  </Link>
                </button>
                <button className="button is-danger">
                  <Link to={"/cart"}>
                    <strong className="has-text-white">
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
                  </Link>
                </button>
                <button
                  className="button is-danger"
                  onClick={() => setIsSerching(!isSerching)}
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isSerching && <SearchBar />}
      </nav>
    </>
  );
};

export default Navbar;
