import React from "react";

import "./Footer.css";

function Footer() {
  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__backtotop" onClick={backToTop}>
        Back To Top
      </div>
      <div className="footer__navcontainer">
        <div className="footer__nav">
          <strong>Get to Know us</strong>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Release</p>
          <p>Amazon Cares</p>
          <p>Gift a smile</p>
        </div>
        <div className="footer__nav">
          <strong>Connect with us</strong>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer__nav">
          <strong>Make Money with us</strong>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="footer__nav">
          <strong>Let Us Help You</strong>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
