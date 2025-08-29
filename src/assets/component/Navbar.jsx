import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">Lista de Instrumentos</h1>
      <div className="nav-buttons">
        <Link
          to="/tabela"
          className={location.pathname === "/tabela" ? "active" : ""}
        >
          Tabela
        </Link>
        <Link
          to="/cards"
          className={location.pathname === "/cards" ? "active" : ""}
        >
          Cards
        </Link>
      </div>
    </nav>
  );
}
