import "../Css/Product.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Store/Slices/cartSlice";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  let dispatch = useDispatch();

  let { id, Title, Price, Rating, Image } = item;

  return (
    <div className="Product" id={id}>
      <div className="Product_Header">
        <div className="Product_Title">
          <Link to={`product/${id}`} className="Product_Link">
            {window.innerWidth < 768 ? `${Title.slice(0, 90)}...` : Title}
          </Link>
        </div>
        <div className="Product_Price">
          <small>$</small>
          <span>{Price}</span>
        </div>
        <div className="Product_Rating">
          {Array(Rating)
            .fill()
            .map((_, i) => (
              <span className="RatingStar" key={i}>
                ⭐
              </span>
            ))}
        </div>
      </div>
      <div className="Product_Body">
        <Link to={`product/${id}`} className="Product_Link">
          <img className="Product_Img" src={Image} alt={Image} />
        </Link>
      </div>
      <div className="Product_Footer">
        <button
          className="AddToCart_Btn"
          onClick={() => dispatch(AddToCart(item))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
