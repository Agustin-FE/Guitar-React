import { useState, useEffect } from "react";
import arrayProduct from "../components/products.json";
import ListItem from "../commons/ListItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    //const [guitars, setGuitars] = useState([]);
    const [total, setTotal] = useState(0);
    const guitars = useSelector( state => state.cart )
       //const guitars = useSelector( state => state.cart )
   
       useEffect(()=>{
        
        setIsLoading(true);
        setIsLoading(false);

    })

    if(isLoading)
    return (
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );

    return (
        <div className="cart">
                {guitars.map((guitar,i)=>{ 
                        console.log("cart =>",guitar)
                        return ( <ListItem product = {guitar} key={i} /> ) })} 

                <hr/>
                <div className="totalCompra">
                    <p> <strong> Total: u$s </strong> {total}</p>
                </div>
                <div className="finalizarCompra">
                    <div>
                    <Link to="/cart/form_address">
                     <button className="buttonCompra"> Finalizar Compra </button>
                    </Link>  
                    </div>
                </div>
                   
        </div> 
    );
}

export default Cart;