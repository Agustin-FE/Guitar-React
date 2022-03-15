import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../essets/search.svg";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import LogInCard from "./UserCard/LogInCard";
import LogedCard from "./UserCard/LogedCard";
import { useSelector } from "react-redux";
import MenuMarcas from "./MenuMarcas"


const Navbar = () => {
  let [isSerching, setIsSerching] = useState(false);
  let [logInClick, setLogInClick] = useState(false);

  const isLoged = useSelector( state => state.user )

  window.addEventListener('click', e => {
    let buttonLog = document.getElementById('clickLog')
    let tarjeta = document.getElementById('clickCard')
    if ( (buttonLog && !buttonLog.contains(e.target)) && (tarjeta && !tarjeta.contains(e.target)) ) {
      setLogInClick(false)
    }
  })

  return (
    <>
      <nav className="navbar is-black sticky">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <strong className="has-text-white is-size-5">GUITAR REACT</strong>
            </Link>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <MenuMarcas serie={["Les Paul", "SG", "ES"]} serie2={["Original Collection", "Artist Collection"]}/>
          <div className="navbar-end">
            <div className="navbar-item">
                {isSerching && <SearchBar />}
              <div className="buttons">
                
                <button
                  className="button is-danger"
                  onClick={() => setIsSerching(!isSerching)}
                >
                  <SearchIcon />
                </button>
                <br />
                <br />
                <br />
                <button id="clickLog" className="button is-danger" 
                  onClick={() => setLogInClick(!logInClick)}>
                    <p className="has-text-white">Login</p>
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
              </div>
            </div>
          </div>
        </div>
      </nav>
      

        { logInClick && ( isLoged ? <LogedCard /> : <LogInCard /> ) }
      
    </>
  );
};

export default Navbar;
