import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
      <Link to="/cart">
        <img className="img-carrito" src="./img/carrito.jpg" alt="carrito" />
        {
          cantidadTotal > 0 && <strong className="numerito">{ cantidadTotal }</strong>
        }
      </Link>
    </div>
  );
};

export default CartWidget;
