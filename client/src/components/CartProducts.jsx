import React from "react";
import { useStateValue } from "./StateProvider";

function CartProducts({ id, img, detail, rating, price, off }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket= ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
  return (
    <div className="cart--prod">
      <img src={img} />
      <div className="cart--prod--right">
        <div className="prod-detail">
          <h3>{detail}</h3>
          <strong>{price}</strong>

          <small>{off}</small>
          <div className="cart--prod--rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <small>Eligible for FREE shipping</small>
        </div>
        <button onClick={removeFromBasket}>Remove from Cart </button>
      </div>
    </div>
  );
}

export default CartProducts;
