import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import arrayProduct from "../components/products.json"

const Details = () =>{
    
    //const {guitarId} = useParams();
    const [guitar, setGuitar] = useState([]);

    useEffect(()=>{
        setGuitar(arrayProduct[0]);
    })

    
    /* ************ Cuando este disponible el producto en BackEnd ****  
    useEffect(()=>{
        axios(`/api/product/${guitarId}`)
        .then((res) => res.data)
        .then((data)=> { return setGuitar(data) })
    },[guitarId])
    */ 


/*********** Posiblemente las categorias vengan como un Array, tener en cuenta!!! ******/
//<p> <strong> Categorias: </strong> {guitar.categoria ? guitar.categoria.map((category) =>  category.name ).join(", "):"-"} </p>


return (
        
    <div className="is-justify-content-center">
        { guitar ?
        <> <br/> 
            <div >
                <img src={guitar.imagen} alt={guitar.nombre} class="zoomImg"/>
            </div>
            <div className="description-product" >
                <p class="title is-1 is"> <strong> {guitar.nombre} </strong></p>
                <p class="title is-2 is-spaced"> <strong> ${guitar.precio} </strong></p>
                <p> <strong> Cantidad disponible: </strong> {guitar.stock} </p>
                <p> <strong> Marca: </strong> { guitar.marca} </p>
                <p> <strong> Categorias: </strong> {guitar.categorias} </p>
                <br/>
                <button class="buttonCompra"> Comprar Ahora </button>
            </div> 
        <div> 
            <br />
            <p class="title"> <strong> Descripción </strong> </p>
            <hr/>
            <p> { guitar.descripcion} </p>
        </div>
        </>   
        : <h1> "UPS... Guitar No encontrada"</h1>
        }
    </div>
);
}

export default Details;

