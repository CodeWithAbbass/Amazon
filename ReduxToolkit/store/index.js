import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slice/noteSlice";
import cartReducer from "./slice/cartSlice";
import userReducer from "./slice/userSlice";
import { createLogger } from "redux-logger";
const logger = createLogger();
const store = configureStore({
  // Root Reducer
  reducer: {
    Notes: noteReducer,
    Cart: cartReducer,
    User: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Debugging
});
export default store;
