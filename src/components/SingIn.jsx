import axios from "axios"
import { useEffect, useState } from "react"

export const SingIn = () => {
   let [ name, setName ] = useState( "" ),
      [ surname, setSurname ] = useState( "" ),
      [ email, setEmail ] = useState( "" ),
      [ password, setPassword ] = useState( "" ),
      [ sign, setSign ] = useState( false ),
      [phone, setPhone ] = useState (""),
      [direction, setDirection] = useState ("")

   useEffect ( () => {
      if ( sign ) {
         axios
         .post("http://localhost:3001/api/users/register", { name: name,surname: surname,email: email, password: password, phoneNumber: phone, direction: direction} )
         .then (res => res.data)
         .then( datos => {

            setName( "" )
            setSurname( "" )
            setEmail( "" )
            setPassword( "" )
            setPhone ("")
            setDirection("")
            console.log("Estas registrado", datos)
         } )
      }
      setSign( false )
   }, [ sign ] )
   
   const signSubmit = e => {
      e.preventDefault()
      setSign( true )
   }
   
   const nameHandler = e => {
      e.preventDefault()
      setName( e.target.value )
   }
   
   const surnameHandler = e => {
      e.preventDefault()
      setSurname( e.target.value )
   }

   const emailHandler = e => {
      e.preventDefault()
      setEmail( e.target.value )
   }
   
   const passwordHandler = e => {
      e.preventDefault()
      setPassword( e.target.value )
   }

   const phoneHandler = e => {
      e.preventDefault()
      setPhone( e.target.value )
   }

   const directionHandler = e => {
      e.preventDefault()
      setDirection( e.target.value )
   }

   return (
      <div className = "container grow-content">
         <h2 className = "title is-2" >Registro</h2>
      
         <p className = "content" >Llene el siguente formulario para registrarse</p>
         
         <form onSubmit={ signSubmit } >
            <div className="field">
               <input className="input is-warning-dark" onChange = { nameHandler } 
                  value = { name } 
                  type = "text"  
                  placeholder="Nombre"  
                  name = "Nombre" />
            </div>
            
            <div className="field">
               <input className="input is-warning-dark" onChange = { surnameHandler } 
                  value = { surname } 
                  type = "text"  
                  placeholder="Apellido"  
                  name = "Apellido" />
            </div>

            <div className="field">
               <input className="input is-warning-dark" onChange = { emailHandler } 
                  value = { email } 
                  type="email" 
                  placeholder="Email"  
                  name = "email" />
            </div>
         
            <div className="field">
               <input className="input is-warning-dark" onChange = { passwordHandler } 
                  value = { password } 
                  type = "password"  
                  placeholder="Password"  
                  name = "password" />
            </div>

            <div className="field">
               <input className="input is-warning-dark" onChange = { phoneHandler } 
                  value = { phone } 
                  type = "text"  
                  placeholder="Telefono"  
                  name = "phone" />
            </div>

            <div className="field">
               <input className="input is-warning-dark" onChange = { directionHandler } 
                  value = { direction } 
                  type = "text"  
                  placeholder="Direccion"  
                  name = "direction" />
            </div>

            <div className = "buttons is-right" >
               <button className="buttonTienda" type="submit" name = "Registrarse">
                  Registrarse
               </button>
            </div>
         </form>
         
      </div> )
}

export default SingIn
