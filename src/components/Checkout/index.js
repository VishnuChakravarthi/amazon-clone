import React, { useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="img/checkoutAd.jpg" alt="" />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item, i) => {
            return (
              <CheckoutProduct
                key={i}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
