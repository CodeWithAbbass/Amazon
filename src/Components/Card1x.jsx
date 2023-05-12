import { Link } from "react-router-dom";
import "../Css/Card1x.css";

const Card1x = ({ items }) => {
  let { Headline, Image, link } = items;

  return (
    <div className="Card1x">
      <div className="Card_Header">
        <h2 className="Card_Header_headline">{Headline}</h2>
      </div>
      <div className="Card_Body">
        <Link to={link} className="SI_Link">
          <img src={Image} alt={Headline} className="SI_Image" />
        </Link>
      </div>
      <div className="Card_Footer">
        <Link to="allproducts" className="Card_Footer_Link">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Card1x;
