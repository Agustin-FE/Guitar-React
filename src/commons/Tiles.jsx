import React from "react"
import { Link } from "react-router-dom"

const Tiles = ( { producto } ) => {
  return ( 
    <div className = "mothertile column">
      <Link to = "/details" >
        <div className="tile">
          <div className="tile2 columns">
            <p className = "column" >{ producto.marca }</p> 
            <img className = "guitarimg column" src = {producto.imagen}/>
            <p className = "column">U$S { producto.precio }</p>
          </div>
        </div>
      </Link>
    </div> )
 }

 export default Tiles