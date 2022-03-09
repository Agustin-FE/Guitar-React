import React, { useState } from "react";

const FormCar=()=>{
  let [name, setName] = useState("")
  let [surname, setSurname] = useState("")
  const changeName = e => {
    e.preventDefault()
    setName( e.target.value )
  }
  
  const changeSurname = e => {
    e.preventDefault()
    setSurname( e.target.value )
  }
  
  return (
    <div>
      <form>
        <label>Nombre:  <input type = "text" /></label>
        <label>Apellido:  <input type = "text" /></label>
        <label>Direccion:  <input type = "text" /></label>
        <label>Telefono:  <input type = "text" /></label>
      </form>
    </div> )
};
export default FormCar