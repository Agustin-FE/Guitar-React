import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../store/carrito";

const ButtonCart = (product) => {
    const dispatch = useDispatch();

    const handleAddCart = ()=>{
        dispatch( setCarrito(product));
    }

  return (
    <button class="buttonCompra" onClick={handleAddCart}> Agregar al carrito </button>
  );
};

export default ButtonCart;