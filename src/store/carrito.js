import { createAction, createReducer } from "@reduxjs/toolkit"

export const setCarrito = createAction( "ADDCARRITO" )
export const removeCarrito = createAction( "REMOVECARRITO" )

export const carrito = createReducer( [], { 
   [ setCarrito ]: ( state, action ) => [...state, action.payload],
   [ removeCarrito ]: ( state, action ) => 
         state.filter( producto => producto.id !== action.payload )
} )
/*export const carrito = createReducer( [], { 
   [ setCarrito ]: ( state, action ) => {
      const newCart = []
      if(state.cart) {
         newCart = state.cart
      }
     //const newCart = state.cart
     newCart.push(action.payload);
      return newCart;
   }
} )*/
//Guardar valor
//const dispatch = useDispatch()
//dispatch( setAlgo( "data" ) )

//Pedir valor
//useSelector( state => state.Algo )