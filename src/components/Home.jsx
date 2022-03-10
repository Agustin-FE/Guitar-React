import React, { useEffect, useState } from "react"
import axios from "axios"

import Tiles from "../commons/Tiles"
import FormCar from "./FormCar"
import SingIn from "./SingIn"

const Home = () => {
    
  const [guitarList, setGuitarList] = useState([])
  
  useEffect( ()=> {
    axios
    .get( "http://localhost:3001/api/product/guitar" )
    .then( res => res.data )
    .then( data => {
      setGuitarList( data ) 
    })
    
  }, [] )
  
  return (
    <div>
      <div className = "grilla container is-fluid columns" >
        { guitarList.map( (producto, i) => {
          return (
            <Tiles producto = { producto } key = {i}/> )
        })} 
      </div> 
      <FormCar /> 
      <SingIn />
    </div>
    )
}

 
 export default Home

