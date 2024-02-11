import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <Link to="/">
          <img src={BurgerLogo} alt="" />
        </Link>
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
