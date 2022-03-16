import { useState, useEffect } from "react";
import arrayProduct from "../components/products.json";
import ListItem from "../commons/ListItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormCar from "./FormCar";

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    //const [guitars, setGuitars] = useState([]);
    const [total, setTotal] = useState(0);
    const guitars = useSelector( state => state.cart )
       //const guitars = useSelector( state => state.cart )
   
       useEffect(()=>{
        
        setIsLoading(true);
        setIsLoading(false);

    },[])

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
        <div className="cart grow-content">
                <div className="itemsContainer">
                <div className="formularioEnvio">
                {guitars.map((guitar, i)=>{
                        return ( <ListItem product = {guitar} key={i} /> ) })} 
                </div>
                <div className="formularioEnvio">
                    <FormCar />
                </div>
                </div>

                <hr/>
                <div className="totalCompra">
                    <p> <strong> Total: u$s </strong> {total}</p>
                </div>
                <Link to={"/encamino"}>
                <div className="finalizarCompra">
                    <div>

                       
                     <button className="buttonCompra"> Finalizar Compra </button>
                     
                    </div>
                </div>
                </Link> 
                   

        </div>
    );
}

export default Cart;