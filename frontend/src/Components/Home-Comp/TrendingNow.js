import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/Home-Assets/productNow1.png";
import img11 from "../../Images/Home-Assets/productBack.png";
import img2 from "../../Images/Home-Assets/Cart.png";
import img3 from "../../Images/Home-Assets/DefaultLike.png";

function TrendingNow() {
  return (
    <>
      <div className="sub-title">
      <Link to="/trending-now-all" style={{ textDecoration: 'none',  cursor: 'pointer' }}>
          <h2 className="trendingNow-text">Trending Now</h2>
        </Link>
        <div className="product-section">
          <div className="product-item">
            <img src={img1} alt="" className="hoverable" />
            <div className="hover-content">
            <Link to="/cart" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img2} alt="" className="hover-img" /></Link>
              <Link to="/wishlist" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img3} alt="" className="hover-img2" /></Link>
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
            <Link to="/cart" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img2} alt="" className="hover-img" /></Link>
              <Link to="/wishlist" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img3} alt="" className="hover-img2" /></Link>
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
            <Link to="/cart" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img2} alt="" className="hover-img" /></Link>
              <Link to="/wishlist" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img3} alt="" className="hover-img2" /></Link>
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
            <Link to="/cart" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img2} alt="" className="hover-img" /></Link>
              <Link to="/wishlist" style={{ textDecoration: 'none',  cursor: 'pointer' }}><img src={img3} alt="" className="hover-img2" /></Link>
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
