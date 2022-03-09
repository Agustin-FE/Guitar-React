import React from "react";
import { useEffect } from "react"
import productos from "./products.json"
import axios from "axios"
import Details from "../commons/Details"
import Tiles from "../commons/Tiles"

const Home = () => {
    
  useEffect( ()=> {
    /*axios
    .get("/api/products")????????
    .then(res => res.data)
    .then(data => console.log(data) )*/
    console.log( "Los productos seran importados desde aqui" )
  }, [] )
  
  return (
    <div className = "grilla container is-fluid" style={ { "white-space: normal!important" }} >
      {productos.map( (producto, i) => {
        return (
          <Tiles producto = { producto } key = {i}/>
        )
      })}  
    </div>
  )
}

 
 export default Home

