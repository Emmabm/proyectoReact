import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal, eliminarProducto } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="sin-productos">No hay productos en el carrito</h2>
                <button className="boton-ver-producto"><Link className="link-productos" to="/"> Ver Productos </Link></button>
            </>
        )
    }
    return (
        <div className="contenedor-botones">
            
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
                
            }
           
            <h3 className="total-detalle"> Total:$ {total} </h3>
            <button className="vaciar-carrito" onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
            <button className="finalizar-compra"><Link className="link-finalizar" to="/checkout"> Finalizar Compra </Link></button>
        </div>
    )
}

export default Cart