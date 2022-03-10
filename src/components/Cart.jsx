import { useState, useEffect } from "react";
import arrayProduct from "../components/products.json"
import ListItem from "../commons/ListItem"

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    const [guitars, setGuitar] = useState([]);
    
    useEffect(()=>{
        setIsLoading(true);
        setGuitar(arrayProduct);
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