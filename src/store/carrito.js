import { createAction, createReducer } from "@reduxjs/toolkit"

export const setCarrito = createAction( "CARRITO" )

export const carrito = createReducer( [], { 
   [ setCarrito ]: ( state, action ) => action.payload
} )

//Guardar valor
//const dispatch = useDispatch()
//dispatch( setAlgo( "data" ) )

//Pedir valor
//useSelector( state => state.Algo )