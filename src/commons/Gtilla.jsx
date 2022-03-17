import React, { useEffect, useState } from "react"
import axios from "axios"

import TilesRow from "./TilesRow"
import { useParams } from "react-router"

const Grilla = () => {

  
    
  const [guitarList, setGuitarList] = useState([])

  let { marca, categoria, serie } = useParams()

  useEffect( ()=> {
    marca = marca ? "/"+marca : ""
    categoria = categoria ? "/"+categoria : ""
    serie = serie ? "/"+serie : ""

    axios
    .get(`http://localhost:3001/api/product${marca}${categoria}${serie}` )
    .then( res => res.data )
    .then( data => {
      const rowList = []
      let numberColumns = 4
      const numberOfRows = (data.length - data.length % numberColumns ) / numberColumns
      //let bodyWidth = document.getElementsByTagName('body')[0].clientWidth 
      for (let i=0 ; i < numberOfRows ; i++)
        rowList[i] = data.slice(i*numberColumns, i*numberColumns+numberColumns)
          
      setGuitarList( rowList ) 
    })
    
  }, [marca, categoria, serie] )
  return (
    <table class="table is-fullwidth">
      <tbody>
        { guitarList.map( ( row, i ) =>{
          return (
            <tr key = {i}>
              <TilesRow rowList = { row } />
            </tr>
            )
        }
            
        ) }
      </tbody>
    </table>
  )
  {/* return (
      <div className = "grilla columns is-variable" >
        { guitarList.map( (producto, i) =>
            <Tiles producto = { producto } key = {i}/>
        ) } 
      </div>
    ) */}
}

export default Grilla