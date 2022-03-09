import { Link } from "react-router-dom"

const Tiles = ( { producto } ) => {
   const id = producto.id
   return ( 
      <div className="tile">
         <Link to = "/details" >
            <div className="tile2">
               <p>{ producto.nombre }</p> 
               <img src = "https://m.media-amazon.com/images/I/31uOScWxZdL._SL500_.jpg" width= { "150px" } />
               <p>{ producto.precio }</p>
            </div>
         </Link>
      </div> )
 }

 export default Tiles