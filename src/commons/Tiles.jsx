import { Link } from "react-router-dom"

const Tiles = ( { producto } ) => {

   return ( 
      <div className="tile">
         {/* <Link path = "/details" > */}
            <div className="tile2">
               <p>{ producto.nombre }</p> 
               <img src = { producto.imagen } width= { "150px" } />
               <p>{ producto.precio }</p>
            </div>
         {/* </Link> */}
      </div> )
 }

 export default Tiles