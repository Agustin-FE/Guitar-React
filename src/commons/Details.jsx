import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../store/carrito";
import ButtonCart from "./ButtonCart";

const Details = () => {
  // const dispatch = useDispatch()
  // dispatch( setCarrito( "data" ) )

  const { id } = useParams();
  const [guitar, setGuitar] = useState([]);
  //const [cartUser,setCartUser] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/api/product/${id}`)
      .then((res) => res.data)
      .then((data) => {
        return setGuitar(data);
      });
  }, [id]);

  /*********** Posiblemente las categorias vengan como un Array, tener en cuenta!!! ******/
  //<p> <strong> Categorias: </strong> {guitar.categoria ? guitar.categoria.map((category) =>  category.name ).join(", "):"-"} </p>

  return (
    <>
      <div className="heard-details">
        <div>
          <p> </p>
        </div>
        <div>
          <img src={guitar.imagen} alt={guitar.nombre} />
        </div>
        <div>
          <div className="description-product">
            <p class="title is-1 is">
              {" "}
              <strong>{guitar.nombre}</strong>
            </p>
            <p class="title is-2 is">
              {" "}
              <strong>u$s {guitar.precio}</strong>
            </p>
            <p>
              {" "}
              <strong> Cantidad disponible: </strong> {guitar.stock}
            </p>
            <p>
              {" "}
              <strong> Categoria: </strong>
              {guitar.categoria}
            </p>
            <p>
              {" "}
              <strong> Marca: </strong> {guitar.marca}{" "}
            </p>
            <p>
              {" "}
              <strong> Descripción: </strong> {guitar.descripcion}{" "}
            </p>
            <p>
              <strong>Valoración promedio: </strong>
            </p>
            <br />
            <ButtonCart product={guitar} />
          </div>
        </div>
      </div>

      {/* <div className="comentarios">
    <p><strong>Usuario:</strong></p>
    <p><strong>Calificación: </strong></p>
    <p><strong>Comentarios: <textarea class="textarea is-primary" placeholder="Primary textarea"></textarea></strong></p>
    

//andres-mie
    /*useEffect(()=>{
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
                    <ButtonCart productId={guitar.id}/>
                </div> 
            </div>
            <div>
            <p>            </p>
            </div>
    </div>
     
       </>   
);
}*/
 // mitad --------------------------
    </div> */}

      <article class="message">
        <div class="message-header">
          <p>Opiniones</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          <p>
            <strong>Usuario:</strong>
          </p>
          <p>
            <strong>
              Calificación:{" "}
              <input
                className="input is-primary maschico"
                type="number"
                min="1"
                max="5"
              />
            </strong>
          </p>
          <p>
            <strong>
              Comentarios:{" "}
              <textarea
                class="textarea is-primary"
                placeholder="Primary textarea"
              ></textarea>
            </strong>
          </p>
        </div>
        <button className="buttonCompra"> Enviar</button>
      </article>
    </>
  );
};

export default Details;
