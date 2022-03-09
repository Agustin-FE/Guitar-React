import React from "react"
import { Link } from "react-router-dom"

const Tiles = ( { producto } ) => {
  return ( 
    <div className = "mothertile column">
      <Link to = "/details" >
        <div className="tile">
          <div className="tile2 columns">
            <p className = "column" >{ producto.nombre }</p> 
            <img className = "guitarimg column" src = "https://m.media-amazon.com/images/I/31uOScWxZdL._SL500_.jpg"/>
            <p className = "column">{ producto.precio }</p>
          </div>
        </div>
      </Link>
    </div> )
 }

 export default Tiles