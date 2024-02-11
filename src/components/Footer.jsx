import { Facebook, Instagram, X } from "@mui/icons-material";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Facebook />
        <Instagram />
        <X />
      </div>
      <p>Tüm hakları saklıdır | BurgerYiyelim</p>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
