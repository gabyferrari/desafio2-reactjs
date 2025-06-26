import "./styles.css";
import homeIcon from "../../assets/home.svg";

export default function Header() {

  return (
    <header>
      <div className="header-content-container container">
        <nav className="navbar">
          <div className="menu-items">
            <div className="menu-item">
                Início
            </div>
            <div className="menu-item">
                Produtos
            </div>
            <div className="menu-item">
                Sobre nós
            </div>
          </div>
          <div className="menu-icon">
            <img src={homeIcon} alt="Casinha" />
          </div>
        </nav>
      </div>
    </header>
  );
}
