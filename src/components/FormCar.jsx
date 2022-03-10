import React, { useState } from "react";

const FormCar=()=>{
  let [name, setName] = useState("")
  let [surname, setSurname] = useState("")
  let [address, setAddress] = useState("")
  let [phone, setPhone] = useState("")

  const changeName = e => {
    e.preventDefault()
    setName( e.target.value )
  }
  
  const changeSurname = e => {
    e.preventDefault()
    setSurname( e.target.value )
  }
  
  const changeAddress = e => {
    e.preventDefault()
    setAddress( e.target.value )
  }
  
  const changePhone = e => {
    e.preventDefault()
    setPhone( e.target.value )
  }

  const sendForm = e => {
    e.preventDefault()
    console.log(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={sendForm}>
        <label>Nombre:  
          <input onChange = { changeName } 
               value = { name } 
               type = "text"  
               name = "Nombre" />
          </label>
        <label>Apellido:  
          <input onChange = { changeSurname } 
               value = { surname }
               type = "text"  
               name = "Apellido" />
          </label>
        <label>Direccion:  
          <input onChange = { changeAddress } 
               value = { address } 
               type = "text"  
               name = "Direccion" />
          </label>
        <label>Telefono:  
          <input onChange = { changePhone } 
               value = { phone } 
               type = "text"  
               name = "Telefono" />
          </label>
          <button onClick={ ()=>{} }>
            Enviar
          </button>
      </form>
    </div> )
};
export default FormCar