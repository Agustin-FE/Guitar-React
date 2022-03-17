import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const MenuMarcas = ({ serie, serie2 }) => {

  const isLoged = useSelector( state => state.user )

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
                {/* <a className="dropdown-item">Les Paul</a>
                <a className="dropdown-item">SG</a>
                <a className="dropdown-item">ES</a> */}
                {serie.map((elemento, i) => {
                  return (
                    <Link
                      to={`/gibson/electrics/${elemento}`}
                      key={i}
                      className="dropdown-item"
                    >
                      {elemento}
                    </Link>
                  );
                })}
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
                {/* <a className="dropdown-item">Original Collection</a>
                <a className="dropdown-item">Artist Collection</a> */}
                {serie2.map((elemento, i) => {
                  return (
                    <Link
                      to={`/gibson/acoustics/${elemento}`}
                      key={i}
                      className="dropdown-item"
                    >
                      {elemento}
                    </Link>
                  );
                })}
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
                {/* <a className="dropdown-item">Les Paul</a>
                <a className="dropdown-item">SG</a>
                <a className="dropdown-item">ES</a> */}
                {serie.map((elemento, i) => {
                  return (
                    <Link
                      to={`/fender/electrics/${elemento}`}
                      key={i}
                      className="dropdown-item"
                    >
                      {elemento}
                    </Link>
                  );
                })}
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
                {/* <a className="dropdown-item">Original Collection</a>
                <a className="dropdown-item">Artist Collection</a> */}
                {serie2.map((elemento, i) => {
                  return (
                    <Link
                      to={`/fender/acoustics/${elemento}`}
                      key={i}
                      className="dropdown-item"
                    >
                      {elemento}
                    </Link>
                  );
                })}
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
          <strong>Taylor</strong>®-Guitars
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
                <Link to={"/taylor/electrics"} className="icon-text">
                  <span>Electrics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {/* <a className="dropdown-item">Les Paul</a>
                <a className="dropdown-item">SG</a>
                <a className="dropdown-item">ES</a> */}
                {serie.map((elemento, i) => {
                  return (
                    <Link
                      to={`/taylor/electrics/${elemento}`}
                      key={i}
                      className="dropdown-item"
                    >
                      {elemento}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text ">
                <Link to={"/taylor/acoustics"} className="icon-text">
                  <span>Acoustics</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {/* <a className="dropdown-item">Original Collection</a>
                <a className="dropdown-item">Artist Collection</a> */}
                {serie2.map((elemento, i) => {
                  return (
                    <Link
                      to={`/taylor/acoustics/${elemento}`}
                      key={i}
                      className="dropdown-item"
                    >
                      {elemento}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <hr className="navbar-divider"></hr>
          <a href="https://www.taylorguitars.com/" className="navbar-item">
            Taylor.com
          </a>
        </div>
      </div>
      
      { isLoged ? isLoged.admin ? 

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <strong> Administrar </strong>
        </a>
        <div className="navbar-dropdown">
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text">
               
                  <span>Usuarios</span>
                
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <Link to={`/admin/user/delete`} className="dropdown-item">
                      Borrar
                </Link>
                <Link to={`/admin/user/modify`} className="dropdown-item">
                      Modificar
                </Link>
              </div>
            </div>

          </div>
          <div className="nested dropdown">
            <a className="navbar-item">
              <span className="icon-text ">
                <Link to={"/admin/product"} className="icon-text">
                  <span>Productos</span>
                </Link>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span>
            </a>
            
          </div>
        </div>
      </div>:null : null}

    </div>
  );
};
export default MenuMarcas;
