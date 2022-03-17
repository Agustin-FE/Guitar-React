import React from "react";
import { Link } from "react-router-dom";

const MenuMarcas = () => {
  return (
    <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link has-background-black-ter">
         <Link to={"/gibson"}><strong className="has-text-white" >Gibson</strong><p className="has-text-white">®-Guitars</p></Link>
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
                <Link to={"/gibson/electrics"} className="icon-text">
                  <span >Electrics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
              <Link to={"/gibson/electrics/lespaul"}><a className="dropdown-item">Les Paul</a></Link>
              <Link to={"/gibson/electrics/sg"}><a className="dropdown-item">SG</a></Link>
              <Link to={"/gibson/electrics/es"}><a className="dropdown-item">ES</a></Link>
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
              <Link to={"/gibson/acoustics/originalcollections"}><a className="dropdown-item">Original Collection</a></Link>
              <Link to={"/gibson/acoustics/artistcollections"}><a className="dropdown-item">Artist Collection</a></Link>
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
        <a className="navbar-link has-background-black-ter">
          <Link to={"/fender"}><strong className="has-text-white">Fender</strong><p className="has-text-white">®-Guitars</p></Link>
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
              <Link to={"/fender/electrics/stratocaster"}><a className="dropdown-item">Stratocaster</a></Link>
              <Link to={"/fender/electrics/telecaster"}><a className="dropdown-item">Telecaster</a></Link>
              <Link to={"/fender/electrics/jazzmaster"}><a className="dropdown-item">Jazzmaster</a></Link>
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
              <Link to={"/fender/acoustics/paramount"}><a className="dropdown-item">Paramount</a></Link>
              <Link to={"/fender/acoustics/classicdesign"}><a className="dropdown-item">Classic Design</a></Link>
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
        <a className="navbar-link has-background-black-ter">
       <strong className="has-text-white">Grestch</strong><p className="has-text-white">®-Guitars</p> 
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item ">
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
              <Link to={"/gretsch/electrics/hollowbody"}><a className="dropdown-item">Hollow Body</a></Link>
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
              <Link to={"/gretsch/acoustics/rancher"}><a className="dropdown-item">Rancher</a></Link>
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
