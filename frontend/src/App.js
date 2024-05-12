import React from "react";
import "./css/home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MensCategory from "./Components/Men's-Women's-Category/MensCategory";
import WomensCategory from "./Components/Men's-Women's-Category/WomensCategory";
import MenAllCollection from "./Components/All-Collection/MenAllCollection";
import WomenAllCollection from "./Components/All-Collection/WomenAllCollection";
import TrendingNowAll from "./Components/TrendingNowAll";
import SeasonSaleAll from "./Components/SeasonSaleAll";
import Wishlist from "./Components/Wishlist";
import Order from "./Components/Order";
import AceWearSlider from "./Components/AceWearSlider";
import Cart from "./Components/Cart";
import Billing from "./Components/Billing";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Navbar from "./Components/Navbar";
import OrderHistory from "./Components/OrderHistory";
import Addresses from "./Components/Addresses";
import AcDetails from "./Components/AcDetails";


function App() {
  return (
    <>

    {/* <Signin/> */}
    {/* <Navbar/> */}

    {/* <Signup/> */}

    {/* <Billing/> */}

    {/* <Cart/> */}

    {/* <AceWearSlider/> */}

    {/* <Order/> */}
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/order" element={<Order/>}>
            <Route path="/order" element={<OrderHistory/>}/>
            <Route path="/order/addresses" element={<Addresses/>}/>
            <Route path="/order/acdetails" element={<AcDetails/>}/>
          </Route>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/mensCategory" element={<MensCategory />} />
          <Route path="/womensCategory" element={<WomensCategory />} />
          <Route path="/menAllCollections" element={<MenAllCollection />} />
          <Route path="/womenAllCollections" element={<WomenAllCollection />} />
          <Route path="/trending-now-all" element={<TrendingNowAll />} />
          <Route path="/season-sale-all" element={<SeasonSaleAll />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
