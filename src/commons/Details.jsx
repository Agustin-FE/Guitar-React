import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../store/carrito";
import ButtonCart from "./ButtonCart";


const Details = () =>{
    
    const {id} = useParams();
    const [guitar, setGuitar] = useState([]);
    //const [cartUser,setCartUser] = useState([]);
    
    

    useEffect(()=>{
        axios(`http://localhost:3001/api/product/${id}`)
        .then((res) => res.data)
        .then((data)=> { return setGuitar(data) })
    },[id])

/*********** Posiblemente las categorias vengan como un Array, tener en cuenta!!! ******/
//<p> <strong> Categorias: </strong> {guitar.categoria ? guitar.categoria.map((category) =>  category.name ).join(", "):"-"} </p>

return (
     <>
    <div className="heard-details">
            <div>
            <p>            </p>
            </div>
            <div  >
                <img src={guitar.imagen} alt={guitar.nombre}/>
            </div>
            <div>
                <div className="description-product" >
                    <p class="title is-1 is"> <strong>{guitar.nombre}</strong></p>
                    <p class="title is-2 is"> <strong>u$s {guitar.precio}</strong></p>
                    <p> <strong> Cantidad disponible: </strong> {guitar.stock}</p>
                    <p> <strong> Categoria: </strong>{guitar.categoria}</p>
                    <p> <strong> Marca: </strong> { guitar.marca}  </p>
                    <p> <strong> Descripción: </strong> { guitar.descripcion}  </p>
                    <br/>
                    <ButtonCart product={guitar}/>
                </div> 
            </div>
            <div>
            <p>            </p>
            </div>
    </div>
     
       </>   
);
}

export default Details;

