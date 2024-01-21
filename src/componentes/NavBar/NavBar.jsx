import LogoWidget from "../LogoWidget/LogoWidget";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <LogoWidget />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navlink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Zapatillas Nike" className="navlink">Nike</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Zapatillas Adidas" className="navlink">Adidas</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Zapatillas Puma" className="navlink">Puma</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
