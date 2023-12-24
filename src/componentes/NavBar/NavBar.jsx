import LogoWidget from '../LogoWidget/LogoWidget';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
   <header>
        {/* <h1>WARDROBE</h1> */}
        <LogoWidget/>
        
        <nav>
            <ul>
                <li>Marcas</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>

   </header>
  
  )
}

export default NavBar