import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/Latest collection.png";
import img2 from "../../Images/Home-Assets/Star 2.png";

function RecentUserReviews() {
  return (
    <>
      <div className="sub-title">
        <h2>Recent User Reviews</h2>
        <div className="review-box">
          <div className="review-box-content">
            <div className="review-box-left">
              <img src={img1} alt="Clothes" className="clothes-image" />
            </div>
            <div className="review-box-right">
              <p className="reviewer-name">Tony_Chopper01</p>
              <p className="product-name">New Galaxy Over Sized T-shirt</p>
              <p className="review">
                I have been waiting for it for a while and finally it came
                today. I tried it on and it was of perfect size and it was
                comfortoble and of good quality. I am happy with it. Would love
                to see more designs like this of mony other anime.
              </p>
              <div className="rating">
                <span className="stars">
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                </span>


                <Link to="/" style={{ textDecoration: 'none',  cursor: 'pointer' }}><button className="buy-now-button">Shop Now</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="review-box">
          <div className="review-box-content">
            <div className="review-box-left">
              <img src={img1} alt="Clothes" className="clothes-image" />
            </div>
            <div className="review-box-right">
              <p className="reviewer-name">Tony_Chopper01</p>
              <p className="product-name">New Galaxy Over Sized T-shirt</p>
              <p className="review">
                I have been waiting for it for a while and finally it came
                today. I tried it on and it was of perfect size and it was
                comfortoble and of good quality. I am happy with it. Would love
                to see more designs like this of mony other anime.
              </p>
              <div className="rating">
                <span className="stars">
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                </span>
                <button className="buy-now-button">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="review-box">
          <div className="review-box-content">
            <div className="review-box-left">
              <img src={img1} alt="Clothes" className="clothes-image" />
            </div>
            <div className="review-box-right">
              <p className="reviewer-name">Tony_Chopper01</p>
              <p className="product-name">New Galaxy Over Sized T-shirt</p>
              <p className="review">
                I have been waiting for it for a while and finally it came
                today. I tried it on and it was of perfect size and it was
                comfortoble and of good quality. I am happy with it. Would love
                to see more designs like this of mony other anime.
              </p>
              <div className="rating">
                <span className="stars">
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                 <img src={img2} alt="" />
                </span>
                <button className="buy-now-button">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="horizontal-line"></div>

    </>
  );
}

export default RecentUserReviews;
