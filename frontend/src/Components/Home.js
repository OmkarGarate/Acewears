import React from "react";
import Navbar from "./Home-Comp/Navbar";
import TrendingNow from "./Home-Comp/TrendingNow";
import SeasonSale from "./Home-Comp/SeasonSale";
import Footer from "./Home-Comp/Footer";
import RecentUserReviews from "./Home-Comp/RecentUserReviews";
import img1 from "../Images/Latest collection.png";
import img2 from "../Images/Men-btn.png";
import img3 from "../Images/Women-btn.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      {/* Latest collection, shop men & women button */}
      <div className="container">
        <img src={img1} alt="" className="c1img" />
        <div className="title-text">
          <h1 className="c1-title">
            <span className="smallFont">UPGRADE YOUR</span> AESTHETHIC WITH OUR
            LATEST COLLECTION
          </h1>
          <button className="buy-now-button">Buy Now</button>
        </div>
        <div className="right-img">
          <div className="image-container">
            <img src={img2} alt="" />
            <Link to="/mensCategory"> 
              <button className="btn-Shop">SHOP MEN'S</button>
            </Link>
          </div>
          <div className="image-container">
            <img src={img3} alt="" />
            <Link to="/womensCategory"> 
            <button className="btn-Shop">SHOP WOMEN'S</button>
            </Link>
          </div>
        </div>
      </div>

      <div class="horizontal-line"></div>

      <TrendingNow />
      <SeasonSale />
      <RecentUserReviews />
      <Footer />
    </>
  );
}

export default Home;
