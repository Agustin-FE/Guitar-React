import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const LogIn = () => {
   let [ email, setEmail ] = useState( "" ),
      [ password, setPassword ] = useState( "" ),
      [ send, setSend ] = useState( false )

   useEffect ( () => {
      if ( send ) {
         axios
         .post("http://localhost:3001/api/users/login", { email: email, password: password } )
         .then ( res => res.data )
         .then( ( datos ) => {
            console.log("secion iniciada", datos)
         })
      }
      setSend( false )
   }, [ send ] )

   const sendData = e => {
      e.preventDefault()
      setSend( true )
   }

   const emailHandler = e => {
      e.preventDefault()
      setEmail( e.target.value )
   }
   
   const passwordHandler = e => {
      e.preventDefault()
      setPassword( e.target.value )
   }

   return (
      <div>
         <h2>Iniciar sesion</h2>

         <form onSubmit={ sendData } >
            <label>E-mail:  <input className="input is-primary" onChange = { emailHandler } 
                  value = { email } 
                  type = "text"  
                  name = "email" />
            </label>
         
            <label>Password:  <input className="input is-primary" onChange = { passwordHandler } 
                  value = { password } 
                  type = "text"  
                  name = "password" />
            </label>
            
            <button className="button is-primary" type="submit" name = "Iniciar sesion">
               Iniciar sesion
            </button>
         </form>
      </div> )
 }