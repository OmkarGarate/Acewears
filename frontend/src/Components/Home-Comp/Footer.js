import React from "react";
import img1 from "../../Images/Home-Assets/fb.png";
import img2 from "../../Images/Home-Assets/insta.png";
import img3 from "../../Images/Home-Assets/twitter.png";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-left">
          <div class="logo">ACE Wears</div>
          <div class="email">support@acewears.in</div>
          <div class="address">
            Kharghar, navi Mumbai, Maharashtra,<p className="india">INDIA</p>
          </div>
          <div class="social-icons">
            <span>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </span>
          </div>
          <div class="copyright">Copyright © Ace Wears 2024</div>
        </div>
        <div class="footer-right">
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Refund & Returns</li>
            <li>Privacy Policy</li>
            <li>Shipping</li>
            <li>Contact Us</li>
          </ul>
          <p>
            Design and Development by <span className="oar"> &nbsp;OAR</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
