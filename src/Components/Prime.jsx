import "../Css/Prime.css";
import PrimeHeroBanner from "../Assets/PrimeHeroBanner.jpg";
import AllProducts from "./AllProducts";

const Prime = () => {
  return (
    <div className="Prime">
      <div className="Prime_Container">
        <div className="Prime_Hero_Container">
          <img
            className="HeroBanner"
            src={PrimeHeroBanner}
            alt="Prime Hero Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Prime;
