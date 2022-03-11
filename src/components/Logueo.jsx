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
         .then( datos => {

            setEmail( "" )
            setPassword( "" )
            console.log("sesion iniciada", datos)
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
      <div className = "container">
         <h2 className = "title is-2" >Iniciar sesion</h2>

         <form onSubmit={ sendData } >
            
            <div className="field">
               <input className="input is-primary" onChange = { emailHandler } 
                  value = { email } 
                  type = "text"  
                  placeholder="Email"  
                  name = "email" />
            </div>
                  
            <div className="field"><input className="input is-primary" onChange = { passwordHandler } 
                  value = { password } 
                  type = "password"  
                  placeholder="Password"  
                  name = "password" />
            </div>

            <div className = "buttons is-right" >
               <button className="buttonCompra" type="submit" name = "Iniciar sesion">
                  Iniciar sesion
               </button>
            </div>
         </form>
      </div> )
 }

 export default LogIn