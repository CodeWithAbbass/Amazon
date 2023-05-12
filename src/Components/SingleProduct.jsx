import "../Css/SingleProduct.css";
import SamsungLED from "../Assets/Products/SamsungLED.jpg";
import Fitbit from "../Assets/Products/Fitbit.jpg";
import Charcol from "../Assets/Products/Charcol.jpg";
import Kenwood from "../Assets/Products/Kenwood.jpg";
import LeanStartup from "../Assets/Products/LeanStartup.jpg";
import Tablet from "../Assets/Products/Tablet.jpg";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  SelectIncrementDecrement,
  PlusIncrement,
  MinusDecrement,
  DeleteFromCart,
} from "../Store/Slices/cartSlice";
import PriceFormat from "../Helpers/PriceFormat";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const CartItems = useSelector((state) => state.Cart.items);
  let dispatch = useDispatch();
  useEffect(() => {
    document.body.style.background = "#fff";
    return () => {};
  }, []);
  return (
    <div className="SingleProduct">
      <div className="Desktop_SIngleProduct">
        <div className="SingleProduct_Product_Container">
          <div className="SingleProduct_Container">
            <div className="SingleProduct_Image_Container">
              <div className="SingleProduct_SideImage">
                <img
                  src={Fitbit}
                  className="SP_SideImage_Image"
                  alt="Product Picture"
                />
                <img
                  src={Charcol}
                  className="SP_SideImage_Image"
                  alt="Product Picture"
                />
                <img
                  src={Kenwood}
                  className="SP_SideImage_Image"
                  alt="Product Picture"
                />
                <img
                  src={LeanStartup}
                  className="SP_SideImage_Image"
                  alt="Product Picture"
                />
                <img
                  src={Tablet}
                  className="SP_SideImage_Image"
                  alt="Product Picture"
                />
                <img
                  src={SamsungLED}
                  className="SP_SideImage_Image"
                  alt="Product Picture"
                />
              </div>
              <div className="SingleProduct_MainImage">
                <img
                  src="https://m.media-amazon.com/images/I/61GjAak00vL._AC_SX679_.jpg"
                  className="SP_MainImage_Image"
                  alt="Product Picture"
                />
              </div>
            </div>
            <div className="SingleProduct_Info_Container">
              <h2 className="SP_Title">
                Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch
                Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch
                ID, All-Day Battery Life - Space Gray
              </h2>
              <div className="SP_RatingStar">⭐⭐⭐⭐⭐</div>
              <hr className="SP_Separator" />
              <div className="SP_Price">
                <span className="SP_Price_DiscountPercent">-18%</span>
                <span className="SP_Price">
                  <span className="BuyBox_Price_Sup">$</span>
                  <span className="BuyBox_Price_Price">269</span>
                  <span className="BuyBox_Price_Sup">99</span>
                </span>
              </div>
              <div className="SP_LeftStock">
                <p className="LeftStock_Txt">
                  Only 2 left in stock - order soon
                </p>
              </div>
              <div className="SP_Style">
                <span className="SP_Style_Txt">Style:</span>
                <span className="SP_Style_Style">Wifi</span>
              </div>
              <div className="SP_Color">
                <span className="SP_Color_Txt">Color:</span>
                <span className="SP_Color_Color">Space Gray</span>
              </div>
              <div className="SP_OtherInfo"></div>
            </div>
            <div className="SingleProduct_BuyBox_Container">
              <div className="BuyBox_Container">
                <div className="BuyBox_Price">
                  <span className="BuyBox_Price_Sup">$</span>
                  <span className="BuyBox_Price_Price">269</span>
                  <span className="BuyBox_Price_Sup">99</span>
                </div>
                <div className="BuyBox_PrimaryMessage">
                  <span className="BuyBox_Message">$14.24 delivery </span>
                  <span className="BuyBox_EST">Tuesday, May 23</span>
                </div>
                <div className="BuyBox_Country">
                  <PlaceOutlinedIcon className="BuyBox_LocationIcon" />
                  <span className="BuyBox_Country_Txt">Pakistan</span>
                </div>
                <div className="BuyBox_Stock">In Stock</div>
                <div className="BuyBox_Quantity">
                  <form className="Quantity_Info">
                    <select
                      name="Quantity"
                      id="Quantity"
                      className="BuyBox_Quantity_Info"
                      value="1"
                      onChange={(e) => QuantityOnchange(e, id)}
                    >
                      <option value="1" className="Quantity_Option">
                        1
                      </option>
                      <option value="2" className="Quantity_Option">
                        2
                      </option>
                      <option value="3" className="Quantity_Option">
                        3
                      </option>
                      <option value="4" className="Quantity_Option">
                        4
                      </option>
                      <option value="5" className="Quantity_Option">
                        5
                      </option>
                      <option value="6" className="Quantity_Option">
                        6
                      </option>
                    </select>
                    <span className="Quantity_Txt BuyBox_Quantity_Txt">
                      Qty :
                    </span>
                  </form>
                </div>
                <div className="BuyBox_MainBtn">
                  <button className="BuyBox_AddToCart">Add to Cart</button>
                  <button className="BuyBox_BuyNow">Buy Now</button>
                </div>
                <table className="BuyBox_Labels_Container">
                  <tbody>
                    <tr className="BuyBox_Labels">
                      <td className="Label_Heading">Payment</td>
                      <td className="Label_Txt">Secure transaction</td>
                    </tr>

                    <tr className="BuyBox_Labels">
                      <td className="Label_Heading">Ship from</td>
                      <td className="Label_Txt">Amazon.com</td>
                    </tr>

                    <tr className="BuyBox_Labels">
                      <td className="Label_Heading">Sold by</td>
                      <td className="Label_Txt">Amazon.com</td>
                    </tr>
                    <tr className="BuyBox_Labels">
                      <td className="Label_Heading">Returns</td>
                      <td className="Label_Txt">
                        Eligible for Return, Refund or Replacement within 15
                        days of receipt
                      </td>
                    </tr>
                    <tr className="BuyBox_Labels">
                      <td className="Label_Heading">Support</td>
                      <td className="Label_Txt">
                        Free Amazon tech support included
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="BuyBox_AddToList_Container">
                  <button className="BuyBox_AddToList_btn">Add To List</button>
                </div>
              </div>

              <div className="BuyBox_SellOnAmazon">
                <p className="HOTS_Txt">Have one to sell?</p>
                <Link className="BuyBox_SellOnAmazon_Link">Sell On Amazon</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="SingleProduct_SubTotal_Container">
          <div className="SP_Subtotal_Header">
            <div className="SP_SubTotal_Txt">Subtotal</div>
            <div className="SP_SubTotal_Price">$109.98</div>
            <Link to="/cart" className="SP_SubTotal_GoToCart_Btn">
              Go to Cart
            </Link>
          </div>
          <div className="SP_Retail_Cart_Container">
            <div className="SP_Subtotal_Item">
              <Link to="/product/2" className="SP_Cart_Product_Link">
                <img src={SamsungLED} alt="Retail Cart Product Image" />
              </Link>
              <div className="SP_Retail_Product_Price">$59.99</div>
              <form className="SP_Subtotal_Quantity_Info">
                <select
                  name="Quantity"
                  id="Quantity"
                  className="SP_Subtotal_Quantity_Select"
                  value="1"
                  onChange={(e) => QuantityOnchange(e, id)}
                >
                  <option value="1" className="Quantity_Option">
                    1
                  </option>
                  <option value="2" className="Quantity_Option">
                    2
                  </option>
                  <option value="3" className="Quantity_Option">
                    3
                  </option>
                  <option value="4" className="Quantity_Option">
                    4
                  </option>
                  <option value="5" className="Quantity_Option">
                    5
                  </option>
                  <option value="6" className="Quantity_Option">
                    6
                  </option>
                </select>
                <Link className="SP_Subtotal_Delete_Link">
                  <DeleteOutlineOutlinedIcon className="SP_Subtotal_Delete_Icon" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
