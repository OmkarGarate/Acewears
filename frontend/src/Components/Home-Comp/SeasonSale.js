import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/Home-Assets/productNow1.png";
import img11 from "../../Images/Home-Assets/productBack.png";
import img2 from "../../Images/Home-Assets/Cart.png";
import img3 from "../../Images/Home-Assets/DefaultLike.png";


function SeasonSale() {
  return (
    <>
      <div className="sub-title">
      <Link to="/season-sale-all" style={{ textDecoration: 'none',  cursor: 'pointer' }}>
          <h2>Season Sale</h2>
        </Link>
        <div className="product-section">
          <div className="product-row">
            <div className="product-item">
              <img src={img1} alt="" className="hoverable" />
              <div className="hover-content">
                <img src={img2} alt="" className="hover-img" />
                <img src={img3} alt="" className="hover-img2" />
              </div>
              <div className="product-details">
                <p className="model-type">Pink Overload Over - Sized T-shirt</p>
                <div className="price-container">
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
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
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
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
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
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
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="product-row">
            <div className="product-item">
              <img src={img1} alt="" className="hoverable" />
              <div className="hover-content">
                <img src={img2} alt="" className="hover-img" />
                <img src={img3} alt="" className="hover-img2" />
              </div>
              <div className="product-details">
                <p className="model-type">Pink Overload Over - Sized T-shirt</p>
                <div className="price-container">
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
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
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
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
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
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
                  <p className="price">
                    &#8377;599 <span className="product-offer">-20% OFF</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeasonSale;
