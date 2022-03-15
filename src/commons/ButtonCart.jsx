import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { removeCart, setCart, setNumber } from "../store/carrito";

const ButtonCart = ({product}) => {
    const isInCart = useSelector( state => state.cart ).find(element => element.id === product.id )

    const [cantidad, setCantidad] = useState(product.cantidad || 1)

    const dispatch = useDispatch();

    const cartHandler = () =>{
      console.log(cantidad)
      if (cantidad !== 0) {
        isInCart
        ? dispatch( setNumber( {id: product.id, cantidad: cantidad } ) )
        : dispatch( setCart( {id: product.id, cantidad: cantidad } ) )
      }
      else {
        removeCart( product.id )
      }
    }

    const changeHandler = e =>{
      e.preventDefault()
      setCantidad( parseInt(e.target.value, 10) )
    }

  return (
    <>
      <input className = "input is-primary"
        required type = "number" 
        min="1" max="8"
        value = {cantidad} 
        onChange = {changeHandler}  />
      <button className="buttonCompra" onClick={ () => cartHandler(cantidad) }>Cambiar carrito </button>
    </>
    
  );
};

export default ButtonCart;