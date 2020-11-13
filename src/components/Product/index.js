import React from "react";
import { useStateValue } from "../../StateProvider";
import "./product.css";

const Products = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>s</p>
            ))}
        </div>
      </div>
      <img src={image} alt="item1" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Products;
