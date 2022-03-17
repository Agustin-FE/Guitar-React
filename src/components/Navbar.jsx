import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../essets/search.svg";
import { ReactComponent as CartIcon } from "../essets/cart.svg";
import { ReactComponent as Logo } from "../essets/logos/goldLogo.svg";
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
      <nav className="navbar has-background-black-ter has-text-white sticky">
        <div className="navbar-brand">
          <div className="navbar-item navtext">
            <Link to="/">
              <strong className="has-text-white is-size-5">GUITAR <Logo /> REACT</strong>
            </Link>
          </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <MenuMarcas />
          <div className="navbar-end">
            <div className="navbar-item">
                {isSerching && <SearchBar />}
              <div className="buttons">
                
                <button
                  className="button has-background-warning-dark has-text-white"
                  onClick={() => setIsSerching(!isSerching)}
                >
                  <SearchIcon />
                </button>
                <br />
                <br />
                <br />
                <br />
                <button id="clickLog" className="button has-background-warning-dark" 
                  onClick={() => setLogInClick(!logInClick)}>
                    <p className="has-text-white">Login</p>
                </button>
                <Link to={"/cart"}>
                <button className="button has-background-warning-dark">
                  
                    <strong className="has-text-white">
                      <CartIcon />
                    </strong>
                  
                </button>
                </Link>
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
