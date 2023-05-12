import { Link } from "react-router-dom";
import "../Css/Cart.css";
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
const Cart = () => {
  const CartItems = useSelector((state) => state.Cart.items);
  let dispatch = useDispatch();

  let TotalPrice = 0;
  const QuantityOnchange = (e, id) => {
    let { name, value } = e.target;
    const Details = {
      value,
      id,
    };
    dispatch(SelectIncrementDecrement(Details));
  };
  // useEffect(() => {

  // }, []);

  return (
    <div className="Cart">
      <div className="Cart_Container">
        <div className="Shopping_Cart">
          <div className="Shopping_Cart_Header">
            <h2 className="Shopping_Cart_Heading">Shopping Cart</h2>
            <span className="Shopping_Cart_Price">Price</span>
          </div>
          <div className="Cart_Items_Container">
            {CartItems.length < 1
              ? "No Cart Items"
              : CartItems.map((item, index) => {
                  let { id, Title, Price, Image, Quantity } = item;
                  TotalPrice += +Price * +Quantity;
                  return (
                    <div className="Cart_Item" key={index}>
                      <div className="Cart_Item_Data">
                        <Link to={`/product/${id}`} className="Cart_Item_Link">
                          <img
                            className="Cart_Item_Img"
                            src={Image}
                            alt={Image}
                          />
                        </Link>
                        <div className="Cart_Item_Info">
                          <Link to={`/product/${id}`} className="Title_Info">
                            {window.innerWidth < 991
                              ? `${Title.slice(0, 60)}...`
                              : Title}
                          </Link>
                          <small className="InStock_Info">In Stock</small>
                          <div className="Giftbox DesktopResPrice">
                            <input
                              type="checkbox"
                              name="Gift"
                              id="GiftCheckbox"
                            />
                            <span className="GiftCheckboxTxt">
                              This order contains a gift
                            </span>
                          </div>
                          <div className="MobileResPrice">
                            <strong>${Price}</strong>
                          </div>
                          <div className="Style_Info">
                            <strong>Style:</strong> <span>Wired</span>
                          </div>
                          <div className="Color_Info">
                            <strong>Color:</strong> <span>Black</span>
                          </div>
                          <div className="Cart_Footer DesktopRes_CartFooter">
                            <div className="Quantity_Info">
                              <select
                                name="Quantity"
                                id="Quantity"
                                value={Quantity}
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
                              <span className="Quantity_Txt">Qty:</span>
                            </div>
                            <button
                              className="DeleteCartItem_Btn"
                              onClick={() => dispatch(DeleteFromCart(id))}
                            >
                              Delete
                            </button>
                            <button className="SaveForLatter_Btn">
                              Save For Latter
                            </button>
                            <button className="CompareWith_Btn">
                              Compare With Simmilar items
                            </button>
                            <button className="Share_Btn">Share</button>
                          </div>
                        </div>
                        <div className="Cart_Item_Price_Info">
                          <strong>${Price}</strong>
                        </div>
                      </div>
                      <div className="Cart_Footer MobileRes_CartFooter">
                        <div className="Quantity_Info MobileRes_Quantity_Info">
                          <RemoveIcon
                            className="Trash_Icon"
                            onClick={() => dispatch(MinusDecrement(id))}
                          />

                          <input
                            type="number"
                            className="Quantity_Info_Input"
                            placeholder={Quantity}
                            readOnly
                          />
                          <AddIcon
                            className="Add_Icon"
                            onClick={() => dispatch(PlusIncrement(id))}
                          />
                        </div>
                        <button
                          className="DeleteCartItem_Btn"
                          onClick={() => dispatch(DeleteFromCart(id))}
                        >
                          Delete
                        </button>
                        <button className="SaveForLatter_Btn">
                          Save For Latter
                        </button>
                        <button className="CompareWith_Btn">
                          Compare With Simmilar items
                        </button>
                        <button className="Share_Btn">Share</button>
                      </div>
                    </div>
                  );
                })}
            <div className="Cart_Item_Subtotal">
              <span>Subtotal</span>({`${CartItems.length} item`}):
              <strong>{PriceFormat(TotalPrice)}</strong>
            </div>
          </div>
        </div>
        <div className="Proceed_To_Checkout">
          <div className="Checkout_Subtotal">
            <span>Subtotal</span>({`${CartItems.length} item`}):
            <strong>{PriceFormat(TotalPrice)}</strong> <br />
            <div className="Giftbox">
              <input type="checkbox" name="Gift" id="GiftCheckbox" />
              <span className="GiftCheckboxTxt">
                This order contains a gift
              </span>
            </div>
            <button className="ProceedToCheckout_Btn">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
