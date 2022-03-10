import React, { useEffect, useState } from "react";

const FormCar=()=>{
  let [name, setName] = useState(""),
      [surname, setSurname] = useState(""),
      [address, setAddress] = useState(""),
      [phone, setPhone] = useState(""),
      [ send, setSend ] = useState( false )

  useEffect ( () => {
    if ( send ) {
       // axios
       // .post("", { name: name,surname: surname, address: address, phone: phone } )
       // .then (res => res.data)
       // .then( ( datos ) => {
       // })
    }
    setSend( false )
 }, [ send ] )

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
    setSend( true )
    console.log({ name: name,surname: surname, address: address, phone: phone })
  }
  
  return (
    <div>
      <h2>Datos de envio</h2>
 
      <p>Ingrese aqui los datos de envio</p>
      <form onSubmit={sendForm}>
        <label>Nombre:  
          <input className="input is-primary" onChange = { changeName } 
               value = { name } 
               type = "text"  
               name = "Nombre" />
          </label>
        <label>Apellido:  
          <input className="input is-primary" onChange = { changeSurname } 
               value = { surname }
               type = "text"  
               name = "Apellido" />
          </label>
        <label>Direccion:  
          <input className="input is-primary" onChange = { changeAddress } 
               value = { address } 
               type = "text"  
               name = "Direccion" />
          </label>
        <label>Telefono:  
          <input className="input is-primary" onChange = { changePhone } 
               value = { phone } 
               type = "text"  
               name = "Telefono" />
          </label>
          <button className="buttonCompra" type="submit" name = "Enviar formulario de envio">
            Enviar
          </button>
      </form>
    </div> )
};
export default FormCar