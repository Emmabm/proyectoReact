import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, stock, precio, img}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
    
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedor-item-detail'>
       <img className='imagen-detail' src={img} alt={nombre} />
        <p className='id-detail'>{id}</p>
        <h2> {nombre} </h2>
        <p>${precio}</p>
        <p>Stock: {stock}</p>
        <p>Estas zapatillas son el complemento ideal para cualquier ocasión en la que quieras lucir elegante y a la moda sin sacrificar la comodidad. Su diseño cuidadosamente elaborado combina materiales de alta calidad con detalles sofisticados para crear un aspecto refinado y contemporáneo.
        Con su estilo atemporal y versátil, estas zapatillas son la opción perfecta para salir a cenar, ir de compras o disfrutar de una noche en la ciudad. Su elegancia discreta y su atención al detalle las convierten en un imprescindible en el armario de cualquier persona que valore el estilo y la funcionalidad en igual medida.
        </p>
        {
          agregarCantidad > 0 ? (<Link to="/cart" className='terminar-compra'>Terminar Compra</Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad}/>)
        }
    </div>

    
  )
}

export default ItemDetail