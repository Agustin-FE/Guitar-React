import React from "react";
import { Link } from "react-router-dom";

const MenuMarcas = () => {
  return (
    <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <strong>Gibson</strong>®-Guitars
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
                <Link to={"/gibson/electrics"} className="icon-text">
                  <span>Electrics</span>
                </Link>
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
                <Link to={"/gibson/acoustics"} className="icon-text">
                  <span>Acoustics</span>
                </Link>
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
          <a href="https://www.gibson.com/en-US/" className="navbar-item">
            Gibson.com
          </a>
        </div>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <strong>Fender</strong>®-Guitars
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
                <Link to={"/fender/electrics"} className="icon-text">
                  <span>Electrics</span>
                </Link>
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
                <Link to={"/fender/acoustics"} className="icon-text">
                  <span>Acoustics</span>
                </Link>
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
          <a href="https://www.fender.com/en-US/start" className="navbar-item">
            Fender.com
          </a>
        </div>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <strong>Grestch</strong>®-Guitars
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
                <Link to={"/gretsch/electrics"} className="icon-text">
                  <span>Electrics</span>
                </Link>
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
                <Link to={"/gretsch/acoustics"} className="icon-text">
                  <span>Acoustics</span>
                </Link>
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
          <a href="https://www.gretschguitars.com/" className="navbar-item">
            Gretsch.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default MenuMarcas;
