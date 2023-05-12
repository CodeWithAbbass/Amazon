import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prime from "./Components/Prime";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import User from "./Components/User";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prime" element={<Prime />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/user" element={<User />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
