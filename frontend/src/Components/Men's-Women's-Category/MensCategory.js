import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/home.css";
import Navbar from "../Home-Comp/Navbar";
import img1 from "../../Images/mensCategorySlider.png";
import img2 from "../../Images/mensCategorySlider1.png";
import img3 from "../../Images/mensCategorySlider2.png";
import img4 from "../../Images/Home-Assets/productNow1.png";
import Footer from "../Home-Comp/Footer";
import TrendingNow from "../Home-Comp/TrendingNow";
import SeasonSale from "../Home-Comp/SeasonSale";

function MensCategory() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
      const slideInterval = setInterval(nextSlide, 3000);

      return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <>
      <Navbar />

      {/* Mens Category Slider */}
      <div className="category-container">
        <div className="slider-wrapper">
          <div className="slide" key={currentIndex}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          </div>
        </div>

        <div class="horizontal-line"></div>

        {/* Mens Categories section */}
        <div className="sub-title">
        <Link to="/menAllCollections" style={{ textDecoration: 'none',  cursor: 'pointer' }}>
          <h2>Men's Category</h2>
        </Link>
          <div className="product-section">
            <div className="product-row">
              <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
              <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
              <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
              <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
            </div>

            <div className="product-row">
            <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
              <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
              <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
              <div className="product-item">
                <img src={img4} alt="" />
                <div className="product-details">
                  <p className="model-type">OVER SIZED TSHIRT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TrendingNow />
        <SeasonSale />

        <div class="horizontal-line"></div>
        <Footer />
      </div>
    </>
  );
}

export default MensCategory;
