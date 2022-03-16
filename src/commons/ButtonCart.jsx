import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addCart, postCart, removeCart, setCart, setNumber, updateCart } from "../store/carrito";

const ButtonCart = ({ productId }) => {
    const isInCart = useSelector( state => state.cart ).find(element => element.productId === productId )

    const [cantidad, setCantidad] = useState( isInCart ? isInCart.cantidad : 0 )

    const dispatch = useDispatch();

    const cartHandler = () =>{
      console.log(cantidad)
      if (cantidad !== 0) {
        isInCart
        ? dispatch( updateCart( {productId: productId, cantidad: cantidad, userId: 1 } ) )
        : dispatch( addCart( {productId: productId, cantidad: cantidad, userId: 1 } ) )
      }
      else {
        dispatch( removeCart( {productId: productId, userId: 1 }))
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
        min = {0} max = {8} 
        value = { isInCart ? isInCart.cantidad : cantidad } 
        onChange = {changeHandler}  />
      <button className="buttonCompra" onClick={ cartHandler }>Cambiar carrito </button>
    </>
    
  );
};

export default ButtonCart;