import PropTypes from "prop-types";

const MenuItem = ({ name, image, content, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h5>{content}</h5>
      <p>{price} ₺</p>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.number,
};

export default MenuItem;
