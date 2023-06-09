import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      const newItem = action.payload;
      let avail = state.items.filter((item) => item.id == newItem.id);
      if (avail.length > 0) {
        let res = state.items.map((item) => {
          if (item.id == newItem.id) {
            if (item.Quantity >= item.Stock) {
              return { ...item, Quantity: item.Stock };
            }
            return { ...item, Quantity: item.Quantity + 1 };
          }
          return { ...item };
        });
        return { ...state, items: res };
      }
      return {
        ...state,
        items: [...state.items, newItem],
      };
    },
    SelectIncrementDecrement(state, action) {
      let { value, id } = action.payload;
      const res = state.items.map((item) => {
        if (item.id == id) {
          if (value >= item.Stock) {
            return { ...item, Quantity: item.Stock };
          }
          if (value <= 1) {
            return { ...item, Quantity: 1 };
          }
          return { ...item, Quantity: value };
        }
        return { ...item };
      });
      return { ...state, items: res };
    },
    PlusIncrement(state, action) {
      const itemID = action.payload;
      let res = state.items.map((item) => {
        if (item.id == itemID) {
          if (item.Quantity >= item.Stock) {
            return { ...item, Quantity: item.Stock };
          }
          return { ...item, Quantity: +item.Quantity + 1 };
        }
        return { ...item };
      });
      return { ...state, items: res };
    },
    MinusDecrement(state, action) {
      let itemID = action.payload;
      let res = state.items.map((item) => {
        if (item.id == itemID) {
          if (item.Quantity <= 1) {
            return { ...item, Quantity: 1 };
          }
          return { ...item, Quantity: +item.Quantity - 1 };
        }
        return { ...item };
      });
      return { ...state, items: res };
    },
    DeleteFromCart(state, action) {
      const itemID = action.payload;
      const res = state.items.filter((item) => item.id !== itemID);
      return { ...state, items: res };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  AddToCart,
  PlusIncrement,
  MinusDecrement,
  DeleteFromCart,
  SelectIncrementDecrement,
} = cartSlice.actions;
export default cartSlice.reducer;
