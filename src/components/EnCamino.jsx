import React from "react";
import { Link } from "react-router-dom";

const EnCamino = () => {
  return (
    <div>
      <article class="message is-dark">
        <div class="message-header">
          <p>Tu pedido ya esta en camino!</p>
        </div>
        <div class="message-body">
          <p>Datos de la compra</p>

          <p> Producto: </p>
          <p>Dirección: </p>
          <p>Teléfono: </p>
          <p>Te mandamos un mail con la confirmación de tu compra</p>
          <p> Muchas gracias por tu compra</p>
          <Link to={"/"}>
            <button className="buttonCompra">Seguir comprando</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default EnCamino;
