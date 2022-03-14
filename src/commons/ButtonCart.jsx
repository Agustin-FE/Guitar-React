import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { removeCarrito, setCarrito } from "../store/carrito";

const ButtonCart = ({ product }) => {
    const isInCart = useSelector( state => state.cart ).includes(product)

    const dispatch = useDispatch();

    const cartHandler = ()=>{
        isInCart
        ? dispatch( removeCarrito( product.id ) )
        : dispatch( setCarrito( product ) )
    }

  return (
    <button className="buttonCompra" onClick={ cartHandler }>{ isInCart ? "Quitar" : "Agregar" } al carrito </button>
  );
};

export default ButtonCart;