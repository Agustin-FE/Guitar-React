import { createAction, createReducer } from "@reduxjs/toolkit"

export const setCarrito = createAction( "CARRITO" )

export const carrito = createReducer( [], { 
   [ setCarrito ]: ( state, action ) => {
      let newCart = []
      if(state.cart) {
         newCart = state.cart
      }
     //const newCart = state.cart
     newCart.push(action.payload);
      return newCart;
   }
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