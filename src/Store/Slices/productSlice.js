import { createSlice } from "@reduxjs/toolkit";
import LeanStartup from "../../Assets/Products/LeanStartup.jpg";
import Kenwood from "../../Assets/Products/Kenwood.jpg";
import Tablet from "../../Assets/Products/Tablet.jpg";
import SamsungLED from "../../Assets/Products/SamsungLED.jpg";
import Fitbit from "../../Assets/Products/Fitbit.jpg";
import Charcol from "../../Assets/Products/Charcol.jpg";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      {
        id: "1",
        Title:
          "The Lean Startup - HotSwap Optical Eric Ries - TKL Esports Design - Optical Switches - RGB Customization - Aluminum Alloy, Frame - Double Shot PBT Keycaps",
        Price: 29.99,
        Rating: 5,
        Image: LeanStartup,
        Quantity: 1,
        Stock: 5,
      },
      {
        id: "2",
        Title:
          "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
        Price: 29.99,
        Rating: 5,
        Image: Kenwood,
        Quantity: 1,
        Stock: 5,
      },
      {
        id: "3",
        Title: "Samsung LC49RG90SSIXEN 49' Curved LED Gaming Monitor",
        Price: 199.99,
        Rating: 3,
        Image: Fitbit,
        Quantity: 1,
        Stock: 4,
      },
      {
        id: "4",
        Title:
          "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
        Price: 349.99,
        Rating: 4,
        Image: Charcol,
        Quantity: 1,
        Stock: 4,
      },
      {
        id: "5",
        Title:
          "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
        Price: 598.99,
        Rating: 4,
        Image: Tablet,
        Quantity: 1,
        Stock: 3,
      },
      {
        id: "6",
        Title:
          "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        Price: 499.99,
        Rating: 5,
        Image: SamsungLED,
        Quantity: 1,
        Stock: 3,
      },
    ],
    loading: false,
    error: "",
  },
  reducers: {
    addProduct(state, action) {
      console.log(state.items);
    },
    updateProduct(state, action) {
      console.log(state);
    },
    deleteProduct(state, action) {
      // console.log(action.payload);
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
