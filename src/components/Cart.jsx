import { useState, useEffect } from "react";
import ListItem from "../commons/ListItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormCar from "./FormCar";
import EnCamino from "./EnCamino";
import axios from "axios";

const Cart = () =>{
    const [isLoading,setIsLoading] = useState([true])
    //const [guitars, setGuitars] = useState([]);
    const user = useSelector( state => state.user )
    const [total, setTotal] = useState(0);
    const guitars = useSelector( state => state.cart )
    let [isSell, setIsSell] = useState(false);
    const [orden, setOrden] = useState(null);

       //const guitars = useSelector( state => state.cart )


        const onClickHandler = () => {
            setIsSell(!isSell)

            axios.post(`http://localhost:3001/api/orden/createorders/${user.id}`, orden)
            .then((res) => res.data)
            .then((data) => {
                console.log("esto es data ----------------->",data)
                return setOrden(data);
            });
        }



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
                return ( <ListItem productId = {guitar.productId} key={i} /> ) })} 
                </div>
                <div className="formularioEnvio">
                    <FormCar />
                </div>
                </div>


                <hr/>
                <div className="totalCompra">
                    <p> <strong> Total: u$s </strong> {total}</p>
                </div>
                {isSell && <EnCamino />}
                <div className="finalizarCompra">
                    <div>
                
                     <button className="buttonCompra" onClick={onClickHandler}> Finalizar Compra </button>

                    </div>
                </div>
                
                   

        </div>
    );
}

export default Cart;