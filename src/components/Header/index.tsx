import "./styles.css";
import homeIcon from "../../assets/home.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <header>
      <div className="header-content-container container">
        <nav className="navbar">
          <div className="menu-items">
            <NavLink to="/home" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} >
                Início
            </NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} >
                Produtos
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} >
                Sobre nós
            </NavLink>
          </div>
          <div className="menu-icon">
            <Link to="/home">
              <img src={homeIcon} alt="Casinha" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
