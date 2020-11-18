import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import homemainimg from ".../../../public/img/homeMain.jpg";
import item2 from ".../../../public/img/item2.jpg";

function Carousel() {
  const items = [
    <img src={homemainimg} alt="" />,
    <img src={item2} alt="" />,
    <img src={homemainimg} alt="" />,
    <img src={homemainimg} alt="" />,
  ];
  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </div>
  );
}

export default Carousel;
