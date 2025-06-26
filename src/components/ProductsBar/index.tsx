import { NavLink } from "react-router-dom";
import "./styles.css";

export default function ProductsBar() {

  return (
    <div className="bar-content container mt20">
     <NavLink to="computers" className={({isActive}) => isActive ? "menu-item-bar menu-active" : "menu-item-bar"} >
        Computadores
     </NavLink>
     <NavLink to="eletronics" className={({isActive}) => isActive ? "menu-item-bar menu-active" : "menu-item-bar"} >
        Eletrônicos
     </NavLink>
     <NavLink to="books" className={({isActive}) => isActive ? "menu-item-bar menu-active" : "menu-item-bar"} >
        Livros
     </NavLink>
    </div>
  );
}
