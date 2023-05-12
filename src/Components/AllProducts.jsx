import "../Css/AllProducts.css";
import ShopTails from "../Assets/SliderImages/ShopTails.jpg";
import Alexa from "../Assets/SliderImages/Alexa.jpg";
import Citadel from "../Assets/SliderImages/Citadel.jpg";
import KidsKindle from "../Assets/SliderImages/KidsKindle.jpg";
import MotherDay from "../Assets/SliderImages/MotherDay.jpg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MainSlider from "./MainSlider";
import Product from "./Product";
const AllProducts = () => {
  let data = useSelector((state) => {
    return state.Products;
  });

  const Slider2 = [ShopTails, Alexa, Citadel, KidsKindle, MotherDay];

  useEffect(() => {}, []);
  return (
    <div className="AllProducts">
      <div className="Slider_Container">
        <MainSlider SlideArr={Slider2} />
      </div>
      <div className="Feature_Product_Container">
        <div className="Product_2x">
          {data.length < 1
            ? ""
            : data.map((product, index) => {
                if (index < 2) {
                  return <Product item={product} key={index} />;
                }
              })}
        </div>
        <div className="Product_3x">
          {data.length < 1
            ? ""
            : data.map((product, index) => {
                if (index > 1 && index < 5) {
                  return <Product item={product} key={index} />;
                }
              })}
        </div>
        <div className="Product_1x">
          {data.length < 1
            ? ""
            : data.map((product, index) => {
                if (index > 4) {
                  return <Product item={product} key={index} />;
                }
              })}
        </div>
      </div>
      <div className="All_Products_Container"></div>
    </div>
  );
};

export default AllProducts;
