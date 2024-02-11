import { Data } from "./helpers/Data";
import MenuItem from "./MenuItem";
import "../../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, i) => (
          <MenuItem key={i} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
