import { createSlice } from "@reduxjs/toolkit";
import { addNote } from "./noteSlice";

const initialState = {
  CartItems: ["CartItem1", "CartItem2", "CartItem3"],
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCart(state, action) {
      console.log("Before", state.items);
      console.log("After", state.items);
    },
  },

  //   ********************************************************
  //   When We Call addNote() extraReducers change the state of cartSlice as per our Logic.
  //   ****************
  //      1st Method
  //   ****************
    extraReducers: {
      ["Notes/addNote"]: (state, action) => {
        state.CartItems.push("CartItem4");
      },
    },
  //   ****************
  //      2nd Method
  //   ****************
  //   extraReducers: (builder) => {
  //     builder.addCase(addNote, (state) => {
  //       state.CartItems.push("CartItem4");
  //     });
  //   },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
