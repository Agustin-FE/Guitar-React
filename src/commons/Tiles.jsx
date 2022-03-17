import React from "react"
import { Link } from "react-router-dom"

import { ReactComponent as GibsonIcon } from "../essets/gibson.svg";
import { ReactComponent as FenderIcon } from "../essets/fender.svg";
import { ReactComponent as EpiphoneIcon } from "../essets/epiphone.svg";

const Tiles = ( { producto } ) => {

  return ( 
    <td className = "mothertile">
      <Link to = {"/guitar/" + producto.id}>
        <div className="tile">
          <div className="tile2 columns">
              { producto.marca === "Gibson" 
                ? <GibsonIcon className = "gibson-icon column"/> 
                : producto.marca === "Fender" 
                  ? <FenderIcon className = "fender-icon column"/> 
                  : <EpiphoneIcon className = "epiphone-icon column"/> }
                
              <img className = "guitarimg column" src = {producto.imagen}/>
              
              <p>U$S { producto.precio }</p>
              

          </div>
        </div>
      </Link>
    </td> )
 }

 export default Tiles