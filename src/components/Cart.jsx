import { useState, useEffect } from "react";
import arrayProduct from "../components/products.json";
import ListItem from "../commons/ListItem";
import { Link } from "react-router-dom";

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    const [guitars, setGuitars] = useState([]);
    const [total, setTotal] = useState(0);
    
    useEffect(()=>{
        setIsLoading(true);
        setGuitars(arrayProduct);
        setTimeout(3000);
        setIsLoading(false);
        setTotal( guitars.map((guitar)=> parseInt(guitar.precio)))
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
        <div className="cart">
                {guitars.map((guitar)=>( <ListItem {... guitar} />))} 

                <hr/>
                <div className="totalCompra">
                    <p> <strong> Total: u$s </strong> {total}</p>
                </div>
                <div className="finalizarCompra">
                    <div>
                    <Link to="/cart/form_address">
                     <button class="buttonCompra"> Finalizar Compra </button>
                    </Link>  
                    </div>
                </div>
                   
        </div> 
    );
}

export default Cart;