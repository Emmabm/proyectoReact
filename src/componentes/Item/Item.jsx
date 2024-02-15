import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, img, precio }) => {
  return (
    <div className="card">
      <img className="card-imagen" src={img} alt={nombre} />
      <div className="producto-detalle">
        <h3 className="titulo-producto">{nombre}</h3>
        <p className="precio">${precio}</p>
        <p className="stock">Stock: {stock}</p>
        <Link to={`/item/${id}`} className="boton-detalle"> Ver detalle </Link>
      </div>
    </div>
  );
};

export default Item;
