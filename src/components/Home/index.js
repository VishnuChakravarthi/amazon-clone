import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./home.css";
import homemainimg from ".../../../public/img/homeMain.jpg";
import Product from "../Product";
import item1 from ".../../../public/img/item1.jpg";
import item2 from ".../../../public/img/item2.jpg";
import item3 from ".../../../public/img/item3.jpg";
import item4 from ".../../../public/img/item4.jpg";
import item5 from ".../../../public/img/item5.jpg";
import item6 from ".../../../public/img/item6.jpg";

const Home = () => {
  const items = [
    <img src="/img/1.jpg" alt="" />,
    <img src="/img/2.jpg" alt="" />,
    <img src="/img/3.jpg" alt="" />,
    <img src="/img/4.jpg" alt="" />,
    <img src="/img/5.jpg" alt="" />,
    <img src="/img/6.jpg" alt="" />,
  ];

  return (
    <div className="home">
      <div className="home__carousel">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={4000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
      </div>
      <div className="home_container">
        {/* <img className="home_image" src="/img/homeMain.jpg" alt="" /> */}
        <div className="home_row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="/img/item1.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Wired Controller for Xbox One, Vinsic Xbox One Wired Controller - Gampad Gaming Controller for Xbox One and PC - Corded Xbox One Controller with 7.2FT Cable & Headset Jack"
            price={129.0}
            image={item2}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Tree Hut Shea Sugar Scrub Tropical Mango, 18oz, Ultra Hydrating and Exfoliating Scrub for Nourishing Essential Body Care"
            price={5.99}
            image={item3}
            rating={3}
          />
          <Product
            id="4"
            title="Spyder Men’s Mandate Zip T-Neck – Pullover Long Sleeve Active Shirt"
            price={88.7}
            image={item4}
            rating={5}
          />
          <Product
            id="5"
            title="Philips Norelco OneBlade Face + Body, Hybrid Electric Trimmer and Shaver, QP2630/70"
            price={39.95}
            image={item5}
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title='Samsung Chromebook Plus V2, 2-in-1, 4GB RAM, 32GB eMMC, 13MP Camera, Chrome OS, 12.2", 16:10 Aspect Ratio, Light Titan (XE520QAB-K01US)'
            price={499.99}
            image={item6}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
