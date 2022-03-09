import { useState, useEffect } from "react";
import arrayProduct from "../components/products.json"

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    const [guitar, setGuitar] = useState([]);
    
    useEffect(()=>{
        setIsLoading(true);
        setGuitar(arrayProduct[0]);
        setTimeout(()=>{setIsLoading(false)},2000)
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
        
        </>
    );
}

export default Cart;