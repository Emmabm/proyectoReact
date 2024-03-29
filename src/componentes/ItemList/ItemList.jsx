import Item from "../Item/Item";
import './Itemlist.css'

const ItemList = ({productos}) => {
  return (
    <div className="contenedor-productos">
        {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
    
  )
}

export default ItemList