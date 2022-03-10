import axios from "axios"
import { useEffect, useState } from "react"

export const SingIn = () => {
   let [ name, setName ] = useState( "" ),
      [ surname, setSurname ] = useState( "" ),
      [ email, setEmail ] = useState( "" ),
      [ password, setPassword ] = useState( "" ),
      [ sign, setSign ] = useState( false )

   useEffect ( () => {
      if ( sign ) {
         axios
         .post("http://localhost:3001/api/users/register", { name: name,surname: surname,email: email, password: password } )
         .then (res => res.data)
         .then( ( datos ) => {
            console.log("Estas registrado", datos)
         })
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
      console.log({ name: name,surname: surname,email: email, password: password })
   }

   return (
      <div>
         <h2>Registro</h2>
      
         <p>Llene el siguente formulario para registrarse</p>
         
         <form onSubmit={ signSubmit } >
            <label>
               Nombre:  <input className="input is-primary" onChange = { nameHandler } 
                  value = { name } 
                  type = "text"  
                  name = "Nombre" />
            </label>
            <label>
               Apellido:  <input className="input is-primary" onChange = { surnameHandler } 
                  value = { surname } 
                  type = "text"  
                  name = "Apellido" />
            </label>
            <div className="field">
               <p className="control has-icons-left has-icons-right">
                  <input className="input is-primary" onChange = { emailHandler } 
                     value = { email } 
                     type="email" 
                     placeholder="Email"  
                     name = "email" />
                  <span className="icon is-small is-left">
                     <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                     <i className="fas fa-check"></i>
                  </span>
               </p>
            </div>
         
            <label>
               Password:  <input className="input is-primary" onChange = { passwordHandler } 
                  value = { password } 
                  type = "text"  
                  name = "password" />
            </label>
            
            <button className="button is-primary" type="submit" name = "Registrarse">
               Registrarse
            </button>
         </form>
         
      </div> )
}

export default SingIn
