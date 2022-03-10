import { useState, useEffect } from "react";
import arrayProduct from "../components/products.json"
import ListItem from "../commons/ListItem"
import { useSelector } from "react-redux";

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    const guitars = useSelector( state => state.cart )
    
    useEffect(()=>{
        setIsLoading(true);
        setTimeout(3000);
        setIsLoading(false);
    })

    if(isLoading)
    return (
            <div class="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );

    return (
        <>
        {guitars.map((guitar)=>( <ListItem {... guitar} /> ))} 
        </>
    );
}

export default Cart;