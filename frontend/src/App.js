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


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mensCategory" element={<MensCategory />} />
          <Route path="/womensCategory" element={<WomensCategory />} />
          <Route path="/menAllCollections" element={<MenAllCollection />} />
          <Route path="/womenAllCollections" element={<WomenAllCollection />} />
          <Route path="/trending-now-all" element={<TrendingNowAll />} />
          <Route path="/season-sale-all" element={<SeasonSaleAll />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
