import React from 'react'
import './CartItem.css'
const CartItem = ({item, cantidad}) => {
  return (
    <div className='contenedor-detalle'>
        <h3 className='nombre-compra'> {item.nombre} </h3>
        <p className='cantidad-compra'>Cantidad: {cantidad}</p>
        <p className='precio-compra'>Precio: {item.precio}</p>
    </div>
  )
}

export default CartItem