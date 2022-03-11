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
      console.log({ name: name,surname: surname, address: address, phone: phone })
      setName( "" )
      setSurname( "" )
      setAddress( "" )
      setPhone( "" )
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
  }
  
  return (
    <div className = "container">
      <h2 className = "title is-2" >Datos de envio</h2>
 
      <p className = "content" >Ingrese aqui los datos de envio</p>

      <form onSubmit={sendForm}>
               
        <div className="field">
          <input className="input is-primary" onChange = { changeName } 
               value = { name } 
               type = "text"  
               placeholder="Nombre" 
               name = "Nombre" />
        </div>
               
        <div className="field"> 
          <input className="input is-primary" onChange = { changeSurname } 
               value = { surname }
               type = "text"  
               placeholder="Apellido"  
               name = "Apellido" />
        </div>
               
        <div className="field">
          <input className="input is-primary" onChange = { changeAddress } 
               value = { address } 
               type = "text"  
               placeholder="Direccion"  
               name = "Direccion" />
        </div>
               
        <div className="field">
          <input className="input is-primary" onChange = { changePhone } 
               value = { phone } 
               type = "text"  
               placeholder="Telefono"  
               name = "Telefono" />
        </div>
        
        <div className = "buttons is-right" >
          <button className="buttonCompra" type="submit" name = "Enviar formulario de envio">
            Enviar
          </button>
        </div>
      </form>
    </div> )
};
export default FormCar