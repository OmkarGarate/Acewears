import React, { useState } from "react";
import img1 from "../../Images/Home-Assets/productNow1.png";
import img11 from "../../Images/Home-Assets/productBack.png";
import img2 from "../../Images/Home-Assets/Cart.png";
import img3 from "../../Images/Home-Assets/DefaultLike.png";
import img4 from "../../Images/Home-Assets/Cart On.png";
import img5 from "../../Images/Home-Assets/Variant2Like.png";

function TrendingNow() {
  return (
    <>
      <div className="sub-title">
        <h2>Product Now</h2>
        <div className="product-section">
          <div className="product-item">
            <img src={img1} alt="" className="hoverable" />
            <div className="hover-content">
              <img src={img2} alt="" className="hover-img" />
              <img src={img3} alt="" className="hover-img2" />
            </div>
            <div className="product-details">
              <p className="model-type">Pink Overload Over - Sized T-shirt</p>
              <div className="price-container">
                <p className="price"> &#8377;599</p>
              </div>
            </div>
          </div>
          <div className="product-item">
            <img src={img1} alt="" className="hoverable" />
            <div className="hover-content">
              <img src={img2} alt="" className="hover-img" />
              <img src={img3} alt="" className="hover-img2" />
            </div>
            <div className="product-details">
              <p className="model-type">Pink Overload Over - Sized T-shirt</p>
              <div className="price-container">
                <p className="price"> &#8377;599</p>
              </div>
            </div>
          </div>
          <div className="product-item">
            <img src={img1} alt="" className="hoverable" />
            <div className="hover-content">
              <img src={img2} alt="" className="hover-img" />
              <img src={img3} alt="" className="hover-img2" />
            </div>
            <div className="product-details">
              <p className="model-type">Pink Overload Over - Sized T-shirt</p>
              <div className="price-container">
                <p className="price"> &#8377;599</p>
              </div>
            </div>
          </div>
          <div className="product-item">
            <img src={img1} alt="" className="hoverable" />
            <div className="hover-content">
              <img src={img2} alt="" className="hover-img" />
              <img src={img3} alt="" className="hover-img2" />
            </div>
            <div className="product-details">
              <p className="model-type">Pink Overload Over - Sized T-shirt</p>
              <div className="price-container">
                <p className="price"> &#8377;599</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingNow;
