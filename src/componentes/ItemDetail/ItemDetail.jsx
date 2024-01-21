import React from 'react';

import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedor-item-detail'>
       <img className='imagen-detail' src={img} alt={nombre} />
        <p className='id-detail'>{id}</p>
        <h2> {nombre} </h2>
        <p>${precio}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>

    </div>
    
  )
}

export default ItemDetail