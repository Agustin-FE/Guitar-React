import { createAction, createReducer } from "@reduxjs/toolkit"

export const setInitCart = createAction( "INITCART" )
export const setCart = createAction( "ADDCART" )
export const setNumber = createAction( "SETCOUNT" )
export const removeCart = createAction( "REMOVECART" )

export const carrito = createReducer( [], { 
   [ setInitCart ]: ( state, action ) => action.payload,
   [ setCart ]: ( state, action ) => {
         localStorage.setItem( "cart", JSON.stringify( [...state, action.payload] ) )
         return [...state, action.payload]
   },
   [ setNumber ]: ( state, action ) => {
      const { id, cantidad } = action.payload
      const index = state.findIndex( elemento => elemento.id === id)
      state[index].cantidad = cantidad
      localStorage.setItem( "cart", JSON.stringify( state ) )
      return state
   },
   [ removeCart ]: ( state, action ) => 
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


// [{productId, cantidad},{productId, cantidad},{productId, cantidad}]