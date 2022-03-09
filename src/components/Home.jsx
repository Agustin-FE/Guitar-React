import React, { useEffect, useState } from "react"
import axios from "axios"

import Tiles from "../commons/Tiles"

const Home = () => {
    const [guitarList, setGuitarList] = useState([])
  useEffect( ()=> {
    axios
    .get( "http://localhost:3001/api/product/guitar" )
    .then( res => res.data )
    .then( data => {
      setGuitarList( data ) 
      console.log( "Ok: Productos importados" )
    })
    
  }, [] )
  
  return (
    <div className = "grilla container is-fluid" >
      { guitarList.map( (producto, i) => {
          return (
            <Tiles producto = { producto } key = {i}/> )
      })}  
    </div> )
}

 
 export default Home

