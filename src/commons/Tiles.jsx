import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as GibsonIcon } from "../essets/gibson.svg";
import { ReactComponent as FenderIcon } from "../essets/fender.svg";
import { ReactComponent as EpiphoneIcon } from "../essets/epiphone.svg";

const Tiles = ( { producto } ) => {
  return ( 
    <div className = "mothertile column">
      <Link to = {"/guitar/" + producto.id}>
        <div className="tile">
          <div className="tile2 columns">
              {/* <p className = "column" >{ producto.marca }</p>  */}
              { producto.marca === "Gibson" 
                ? <GibsonIcon className = "gibson-icon"/> 
                : producto.marca === "Fender" 
                  ? <FenderIcon className = "fender-icon"/> 
                  : <EpiphoneIcon className = "epiphone-icon"/> }
                
            <img className = "guitarimg column" src = {producto.imagen}/>
              <p>U$S { producto.precio }</p>
          </div>
        </div>
      </Link>
    </div> )
 }

 export default Tiles