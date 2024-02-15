import { useState } from "react";
import './ItemCount.css';
const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
    <>
    <div>
        <button onClick={decrementar} className="boton-contador"> - </button>
        <p> {contador} </p>
        <button onClick={incrementar} className="boton-contador"> + </button>
    </div>
    <button onClick={() => funcionAgregar(contador)} className="agregar-carrito">Agregar al carrito</button>
    </>
  )
}

export default ItemCount