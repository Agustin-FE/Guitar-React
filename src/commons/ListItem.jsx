import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { removeCarrito } from "../store/carrito";
import ButtonCart from "./ButtonCart";

const ListItem = ({product}) =>{
    const { id,nombre, precio, categorias, imagen } = product
    return (<>
            <Link to={"/guitar/" + id}>
            <div className="list-item-cart">
                <hr/>
               <div>
                    <img src={imagen} alt={nombre} height="100px" width="80px"/>
                </div>
               <div>
                    <p > <strong>{nombre} </strong></p>
                    <p > <strong>u$s {precio} </strong></p>
                    <p > {categorias} </p>
                </div>
            </div>
            </Link>
            <ButtonCart product = {product}/>
        </>
    )
};

export default ListItem;