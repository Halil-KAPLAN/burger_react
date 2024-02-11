import { Link } from "react-router-dom";
import "../../styles/Home.css";

const Home = () => {
  return (
    <div className="mainPage">
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
